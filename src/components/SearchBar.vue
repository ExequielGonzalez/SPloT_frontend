<template>
  <div class="row q-mb-md justify-center">
    <div class="q-pt-md col-xs-12 col-sm-12 col-md-10 q-px-sm">
      <q-input
        label="Buscar por patente"
        outlined
        dense
        v-model="searchText"
        @input="onSearchTextChange"
      >
        <template v-slot:append>
          <q-icon name="search" />
        </template>
      </q-input>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    users: Array
  },
  data() {
    return {
      usersFiltered: [],
      searchText: ""
    };
  },
  methods: {
    onSearchTextChange() {
      console.log(this.users);
      if (this.searchText && this.searchText !== "") {
        this.usersFiltered = this.users.filter(
          (user) =>
            user.email
              .toString()
              .toLowerCase()
              .includes(this.searchText.toLowerCase()) ||
            user.firstName
              .toString()
              .toLowerCase()
              .includes(this.searchText.toLowerCase()) ||
            user.lastName
              .toString()
              .toLowerCase()
              .includes(this.searchText.toLowerCase())
        );
      } else {
        this.usersFiltered = this.users;
      }
      console.log(this.usersFiltered);
      this.$emit("result", this.usersFiltered);
      if (this.usersFiltered.length === 0) {
        this.$emit("search-error", this.usersFiltered);
      }
    },
    cleanSearchBar() {
      this.searchText = "";
    }
  }
});
</script>

<style>
</style>