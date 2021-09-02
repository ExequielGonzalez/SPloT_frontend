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
      :users="this.filteredUsers.length!==0?this.filteredUsers:this.emptyTable?[]:Object.values(this.users)"
      @delete-user="deleteUser"
    />
  </q-page>
  <!-- <q-layout view="lHh Lpr lFf"> -->

  <!-- </q-layout> -->
</template>

<script>
import { defineComponent } from "vue";

// import { mapActions } from "vuex";
// import * as Constants from "src/constants";

import TablePlates from "src/components/TablePlates.vue";
import SearchBar from "src/components/SearchBar.vue";
import PlacesCounter from "src/components/PlacesCounter.vue";
import { useSocketIo, useSocketName } from "src/service/socket.js";

export default defineComponent({
  name: "Home",
  components: { TablePlates, SearchBar, PlacesCounter },
  // components: { SearchBar },
  data() {
    return {
      wsConnection: null,
      wsConnected: false,
      wsEndpoint: "wss://0.0.0.0:5000/active_plates_update",
      parkPlaces: {
        free: 10,
        busy: 11
      },
      users: {},
      filteredUsers: [],
      emptyTable: false
    };
  },
  setup() {
    const socket = useSocketIo(5000);
    const [displayName, setDisplayName] = useSocketName(socket);
  },
  // created() {
  //   console.log("creating");
  //   console.log("Trying to open a WebSocket connection...");
  //   // this.wsConnection = new WebSocket("ws://localhost:81");
  //   this.wsConnection = new WebSocket(this.wsEndpoint);
  //   this.wsConnection.onopen = function (event) {
  //     console.log("Connection opened");
  //     this.wsConnected = true;
  //   };
  //   this.wsConnection.onclose = function (event) {
  //     console.log("Connection closed");
  //     this.wsConnected = false;
  //   };
  //   this.wsConnection.onmessage = function (event) {
  //     console.log("message", event);
  //   }; // <-- add this line
  // },

  mounted() {
    this.filteredUsers = Object.values(this.users);
  },

  methods: {
    // onOpen(event) {
    //   console.log("Connection opened");
    //   this.wsConnected = true;
    // },
    // onClose(event) {
    //   console.log("Connection closed");
    //   this.wsConnected = false;
    //   setTimeout(this.initWebSocket, 2000);
    // },
    // onMessage(event) {
    //   console.log("message", event);
    // },
    sendMessage(message) {
      console.log("sending: ", message);
      this.wsConnection.send(message);
    },
    newEntry() {
      this.sendMessage("test");
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