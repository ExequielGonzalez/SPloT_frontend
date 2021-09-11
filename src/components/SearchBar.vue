<template>
  <div class="row q-mb-md justify-center">
    <div class="q-pt-md col-xs-12 col-sm-12 col-md-10 q-px-sm">
      <q-input
        label="Buscar por patente"
        outlined
        dense
        v-model="searchText"
        @update:model-value="onSearchTextChange"
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
    plates: Array
  },
  data() {
    return {
      platesFiltered: [],
      searchText: ""
    };
  },
  methods: {
    onSearchTextChange() {
      console.log(this.plates);
      if (this.searchText && this.searchText !== "") {
        this.platesFiltered = this.plates.filter(
          (plate) =>
            plate.plateNumber
              .toString()
              .toLowerCase()
              .includes(this.searchText.toLowerCase()) ||
            plate.type
              .toString()
              .toLowerCase()
              .includes(this.searchText.toLowerCase())
        );
      } else {
        this.platesFiltered = this.plates;
      }
      console.log(JSON.parse(JSON.stringify(this.platesFiltered)));
      this.$emit("result", JSON.parse(JSON.stringify(this.platesFiltered)));
      if (this.platesFiltered.length === 0) {
        this.$emit(
          "search-error",
          JSON.parse(JSON.stringify(this.platesFiltered))
        );
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