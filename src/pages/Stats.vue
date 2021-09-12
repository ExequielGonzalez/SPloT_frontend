<template>
  <q-page class="q-pa-md">
    <!-- <section class="home-header q-pa-lg"></section> -->
    <bar-graph />
  </q-page>

  <!-- :plates="this.filteredPlates.length!==0?this.filteredPlates:this.emptyTable?[]:Object.values(this.plates)" -->
  <!-- <q-layout view="lHh Lpr lFf"> -->

  <!-- </q-layout> -->
</template>

<script >
import { defineComponent } from "vue";
// import { mapActions } from "vuex";
// import * as Constants from "src/constants";
import { useQuasar } from "quasar";


import BarGraph from "src/components/BarGraph.vue";
// import SearchBar from "src/components/SearchBar.vue";
// import PlacesCounter from "src/components/PlacesCounter.vue";
// import ImageViewer from "src/components/ImageViewer.vue";
import {
  useSocketIo,
  webSocketNewEntry,
  webSocketAlarms
} from "src/service/socket.js";
import {
  getActivePlates,
  getOccupationDetails,
  getPhotoByPlateNumber,
  deleteEntry
} from "src/utils/http-handler";

export default defineComponent({
  name: "Stats",
  components: { BarGraph },

  setup() {
    const $q = useQuasar();
  },
  data() {
    return {
      wsNotification: false,
      parkPlaces: {
        total: 0,
        free: 0,
        busy: 0
      },
      plates: {},
      activePlates: [],
      filteredPlates: [],
      emptyTable: false
    };
  },
  mounted() {
    const socket = useSocketIo(5000);
    webSocketNewEntry(socket, this.newMessage);
    webSocketAlarms(socket, this.handleAlarms);
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
      this.parkPlaces = occupation;
    },
    newEntry() {
      console.log("nuevo ingreso");
    },
    handleAlarms(alert) {
      alert = JSON.parse(alert);
      console.log("new Alarm: ", alert);
      this.$q.notify({
        message: alert.title,
        caption: alert.description,
        color: "negative"
      });
    },
    filterPlates(result) {
      this.emptyTable = false;
      console.log(result);
      this.filteredPlates = JSON.parse(JSON.stringify(result));
      console.log(
        JSON.parse(JSON.stringify(this.filteredPlates)),
        JSON.parse(JSON.stringify(this.filteredPlates)).length !== 0
      );
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
      this.$refs.imageViewerRef.showModal(photo);
    },
    async deleteEntry(id) {
      this.$q
        .dialog({
          title: "Eliminar ingreso",
          message: `¿Esta seguro que desea eliminar este ingreso?`,
          ok: {
            color: "negative",
            label: "eliminar"
          },
          cancel: {
            color: "accent"
          }
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
              color: "accent"
            });
          } else {
            this.$q.notify({
              progress: true,
              message: "No se ha podido eliminar el ingreso seleccionado",
              color: "negative"
            });
          }
        });
    }
  }
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