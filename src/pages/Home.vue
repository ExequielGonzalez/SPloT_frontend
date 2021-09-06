<template>
  <q-page class="q-pa-md">
    <section class="home-header q-pa-lg">
      <PlacesCounter :places="parkPlaces" />
      <q-btn color="primary" icon="check" label="Añadir Ingreso" @click="newEntry" />
    </section>
    <SearchBar
      @result="filterUsers"
      @search-error="showEmptyTable"
      :users="Object.values(this.users)"
      ref="searchBarRef"
    />
    <TablePlates
      :plates="JSON.parse(JSON.stringify(this.activePlates)).length!==0?JSON.parse(JSON.stringify(this.activePlates)):[]"
      @delete-user="deleteUser"
    />
  </q-page>
  <!-- :plates="this.filteredUsers.length!==0?this.filteredUsers:this.emptyTable?[]:Object.values(this.users)" -->
  <!-- <q-layout view="lHh Lpr lFf"> -->

  <!-- </q-layout> -->
</template>

<script>
import { defineComponent } from "vue";
import { markRaw, toRaw } from "vue";
// import { mapActions } from "vuex";
// import * as Constants from "src/constants";

import TablePlates from "src/components/TablePlates.vue";
import SearchBar from "src/components/SearchBar.vue";
import PlacesCounter from "src/components/PlacesCounter.vue";
import { useSocketIo, useSocketConnection } from "src/service/socket.js";
import { getActivePlates, getOccupationDetails } from "src/utils/http-handler";

export default defineComponent({
  name: "Home",
  components: { TablePlates, SearchBar, PlacesCounter },
  data() {
    return {
      wsNotification: false,
      parkPlaces: {
        free: 10,
        busy: 15
      },
      users: {},
      activePlates: [],
      filteredUsers: [],
      emptyTable: false
    };
  },
  mounted() {
    const socket = useSocketIo(5000);
    useSocketConnection(socket, this.newMessage);
    this.filteredUsers = Object.values(this.users);
  },
  methods: {
    async newMessage() {
      console.log("llego algo a los methods");
      let plates = await getActivePlates();
      this.activePlates = plates;
      console.log(JSON.parse(JSON.stringify(this.activePlates)));
      let occupation = await getOccupationDetails();
      console.log(occupation);
      this.parkPlaces.free = occupation.free;
      this.parkPlaces.busy = occupation.busy;
    },
    newEntry() {
      console.log("nuevo ingreso");
    },
    filterUsers(result) {
      this.emptyTable = false;
      this.filteredUsers = result;
    },
    showEmptyTable() {
      this.emptyTable = true;
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
            this.filteredUsers = Object.values(this.users);
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