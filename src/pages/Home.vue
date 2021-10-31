<template>
  <q-page class="q-pa-md">
    <section class="home-header q-pa-lg">
      <PlacesCounter title="Lugares generales" :places="parkPlaces" />
      <PlacesCounter title="Lugares motos" :places="motorbikePlaces" />
      <!-- <q-btn color="primary" icon="check" label="Añadir Ingreso" @click="newEntry" /> -->
    </section>
    <SearchBar
      @result="filterPlates"
      @search-error="showEmptyTable"
      :plates="JSON.parse(JSON.stringify(this.activePlates))"
      ref="searchBarRef"
    />
    <TablePlates
      :plates="
        JSON.parse(JSON.stringify(this.filteredPlates)).length !== 0
          ? JSON.parse(JSON.stringify(this.filteredPlates))
          : this.emptyTable
          ? []
          : JSON.parse(JSON.stringify(this.activePlates))
      "
      @view-photo="showPhoto"
      @add-manual-entry="addManualEntry"
      @delete-user="deleteEntry"
    />
    <NotificationOut @manage-payment="managePayment" ref="notificationOutRef" />
  </q-page>
  <image-viewer ref="imageViewerRef" />
  <PaymentDialog ref="paymentDialogRef" @payment-realized="paymentRealized" />
  <!-- :plates="this.filteredPlates.length!==0?this.filteredPlates:this.emptyTable?[]:Object.values(this.plates)" -->
  <!-- <q-layout view="lHh Lpr lFf"> -->

  <!-- </q-layout> -->
</template>

<script>
import { defineComponent } from "vue";
// import { mapActions } from "vuex";
// import * as Constants from "src/constants";
import { useQuasar } from "quasar";

import TablePlates from "src/components/TablePlates.vue";
import SearchBar from "src/components/SearchBar.vue";
import PlacesCounter from "src/components/PlacesCounter.vue";
import ImageViewer from "src/components/ImageViewer.vue";
import NotificationOut from "src/components/NotificationOut.vue";
import PaymentDialog from "src/components/PaymentDialog.vue";

import {
  useSocketIo,
  webSocketNewEntry,
  webSocketAlarms,
  webSocketPayment,
} from "src/service/socket.js";
import {
  getActivePlates,
  getOccupationDetails,
  getPhotoByPlateNumber,
  deleteEntry,
  editEntry,
  addPayment,
  getTrafficLightData,
  turnOnTrafficLight,
} from "src/utils/http-handler";

export default defineComponent({
  name: "Home",
  components: {
    TablePlates,
    SearchBar,
    PlacesCounter,
    ImageViewer,
    NotificationOut,
    PaymentDialog,
  },

  setup() {
    const $q = useQuasar();
  },
  data() {
    return {
      wsNotification: false,
      parkPlaces: {
        total: 0,
        free: 0,
        busy: 0,
      },
      motorbikePlaces: {
        total: 0,
        free: 0,
        busy: 0,
      },
      plates: {},
      activePlates: [],
      filteredPlates: [],
      emptyTable: false,
    };
  },
  mounted() {
    const socket = useSocketIo(5000);
    webSocketNewEntry(socket, this.newMessage);
    webSocketAlarms(socket, this.handleAlarms);
    webSocketPayment(socket, this.handlePaymentRequest);
    this.filteredPlates = Object.values(this.plates);
    this.newMessage();
  },
  methods: {
    async newMessage() {
      let response;
      let plates = {};
      let occupation = {};
      response = await getActivePlates();
      if (response.status === 200) plates = response.data;
      this.activePlates = plates;
      // console.log(JSON.parse(JSON.stringify(this.activePlates)));
      response = await getOccupationDetails();
      if (response.status === 200) occupation = response.data;
      // console.log(occupation);
      this.parkPlaces = occupation.carsAndVans;
      this.motorbikePlaces = occupation.motorbikes;
    },
    newEntry() {
      console.log("nuevo ingreso");
    },
    handleAlarms(alert) {
      const color = { Info: "info", Warning: "warning", Error: "negative" };
      alert = JSON.parse(alert);
      console.log("new Alarm: ", alert);
      this.$q.notify({
        message: alert.title,
        caption: alert.description,
        color: color[alert.type],
      });
    },
    filterPlates(result) {
      this.emptyTable = false;
      // console.log(result);
      this.filteredPlates = JSON.parse(JSON.stringify(result));
      // console.log(
      //   JSON.parse(JSON.stringify(this.filteredPlates)),
      //   JSON.parse(JSON.stringify(this.filteredPlates)).length !== 0
      // );
    },
    showEmptyTable() {
      this.emptyTable = true;
    },
    async showPhoto(plateNumber) {
      console.log(plateNumber);
      let photo = "";
      let response = await getPhotoByPlateNumber(plateNumber);
      if (response.status === 200) photo = response.data;
      // this.$refs.imageViewerRef.setImage(photo);
      console.log(photo);
      this.$refs.imageViewerRef.showModal(photo);
    },
    async deleteEntry(id) {
      this.$q
        .dialog({
          title: "Eliminar ingreso",
          message: `¿Esta seguro que desea eliminar este ingreso?`,
          ok: {
            color: "negative",
            label: "eliminar",
          },
          cancel: {
            color: "accent",
          },
        })
        .onOk(async () => {
          console.log("eliminando la entry: ", id);
          const response = await deleteEntry(id);
          if (response.status === 200) {
            this.$refs.searchBarRef.cleanSearchBar();
            await this.newMessage();
            this.filteredPlates = [];
            this.$q.notify({
              progress: true,
              message: "Se eliminó el ingreso correctamente",
              color: "accent",
            });
          } else {
            this.$q.notify({
              progress: true,
              message: "No se ha podido eliminar el ingreso seleccionado",
              color: "negative",
            });
          }
        });
    },
    async handlePaymentRequest(entryModified) {
      entryModified = JSON.parse(entryModified);
      console.log("This is a new payment request: ", entryModified);
      const entryReady = this.activePlates.filter(
        (t) => t.entryId == entryModified.entryId
      );

      this.$refs.notificationOutRef.showNotif(entryReady);
    },

    async managePayment(entryModified) {
      entryModified = entryModified[0];
      console.log("ahora si va el popup", entryModified);
      let photo = "";
      if (entryModified.hasPhoto) {
        console.log("tiene foto");
        let response = await getPhotoByPlateNumber(entryModified.plateNumber);
        if (response.status === 200) photo = response.data;
      }
      this.$refs.paymentDialogRef.showDialog(photo, entryModified);
    },
    async paymentRealized(data) {
      console.log("time to save the payment: ", data);
      let response = await editEntry(data.entryId, {
        exitTime: data.exitTime,
        computePayment: false,
      });
      if (response.status === 200) {
        console.log("entry edited succesfully: ", response);
        let paymentCreated = await addPayment({
          amount: data.cost,
          method: data.method,
          entryId: data.entryId,
        });

        console.log("payment created succesfully: ", paymentCreated);
        //TODO: turn on traffic light
        // console.log(response, response.exitPassagewayId);
        const trafficLightData = await getTrafficLightData(
          response.data.exitPassagewayId
        );
        console.log(trafficLightData);
        console.log(trafficLightData.data[0].id);
        turnOnTrafficLight(trafficLightData.data[0].id);
      }
    },
    async addManualEntry() {
      turnOnTrafficLight("1");
    },
  },
});
</script>

<style lang="scss">
.home-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: $s) {
    flex-direction: column;
    & > button {
      margin-top: 20px;
    }
  }
}
</style>
