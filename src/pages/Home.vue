<template>
  <q-page class="q-pa-md">
    <section class="home-header q-pa-lg">
      <PlacesCounter :places="parkPlaces" />
      <q-btn color="primary" icon="check" label="Añadir Ingreso" @click="newEntry" />
    </section>
    <SearchBar
      @result="filterPlates"
      @search-error="showEmptyTable"
      :plates="JSON.parse(JSON.stringify(this.activePlates))"
      ref="searchBarRef"
    />
    <TablePlates
      :plates="JSON.parse(JSON.stringify(this.filteredPlates)).length!==0?JSON.parse(JSON.stringify(this.filteredPlates)):this.emptyTable?[]:JSON.parse(JSON.stringify(this.activePlates))"
      @view-photo="showPhoto"
      @delete-user="deleteUser"
    />
  </q-page>
  <image-viewer ref="imageViewerRef" />
  <!-- :plates="this.filteredPlates.length!==0?this.filteredPlates:this.emptyTable?[]:Object.values(this.plates)" -->
  <!-- <q-layout view="lHh Lpr lFf"> -->

  <!-- </q-layout> -->
</template>

<script >
import { defineComponent } from "vue";
// import { mapActions } from "vuex";
// import * as Constants from "src/constants";

import TablePlates from "src/components/TablePlates.vue";
import SearchBar from "src/components/SearchBar.vue";
import PlacesCounter from "src/components/PlacesCounter.vue";
import ImageViewer from "src/components/ImageViewer.vue";
import { useSocketIo, useSocketConnection } from "src/service/socket.js";
import {
  getActivePlates,
  getOccupationDetails,
  getPhotoByPlateNumber
} from "src/utils/http-handler";

export default defineComponent({
  name: "Home",
  components: { TablePlates, SearchBar, PlacesCounter, ImageViewer },
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
    useSocketConnection(socket, this.newMessage);
    this.filteredPlates = Object.values(this.plates);
    this.newMessage();
  },
  methods: {
    async newMessage() {
      // console.log("llego algo a los methods");
      let plates = await getActivePlates();
      this.activePlates = plates;
      console.log(JSON.parse(JSON.stringify(this.activePlates)));
      let occupation = await getOccupationDetails();
      // console.log(occupation);
      this.parkPlaces = occupation;
    },
    newEntry() {
      console.log("nuevo ingreso");
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
      const photo = await getPhotoByPlateNumber(plateNumber);
      // this.$refs.imageViewerRef.setImage(photo);
      this.$refs.imageViewerRef.showModal(photo);
    },

    async deleteUser(id) {
      this.$q
        .dialog({
          title: "Eliminar usuario",
          message: `¿Esta seguro que desea eliminar este usuario?`,
          ok: {
            push: true,
            color: "negative",
            label: "eliminar"
          },
          cancel: {
            push: true,
            color: "secondary"
          }
        })
        .onOk(async () => {
          const response = await this.removeUser(id);
          if (response) {
            this.filteredPlates = Object.values(this.plates);
            this.showEmptyTable();
            this.$refs.searchBarRef.cleanSearchBar();
            this.$q.notify({
              progress: true,
              message: "Se eliminó el usuario correctamente",
              color: "accent"
            });
          } else {
            this.$q.notify({
              progress: true,
              message: "No se ha podido eliminar el usuario seleccionado",
              color: "negative"
            });
          }
        })
        .onCancel(async () => {});
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