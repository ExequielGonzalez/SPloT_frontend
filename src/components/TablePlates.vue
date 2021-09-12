<template>
  <div class="q-pa-md">
    <q-table
      :dense="$q.screen.lt.md"
      title="Plates"
      :columns="columns"
      :rows="plates"
      row-key="entryId"
      :rows-per-page-options="[15]"
    >
      <!-- visible columns -->
      <template v-slot:top>
        <div class="table__top">
          <h6>Patentes activas</h6>
          <!-- <q-space /> -->

          <q-btn color="primary" label="Añadir ingreso" @click="addEntry" />
        </div>
      </template>
      <!-- visible columns -->
      <!-- actions buttons -->
      <template v-slot:body-cell-actions="props">
        <q-td key="actions" :props="props">
          <!-- edit button -->
          <q-btn flat @click="editRecord(props.row.plateNumber)" icon="visibility" color="primary">
            <q-tooltip
              content-style="font-size: 14px"
              transition-show="scale"
              transition-hide="scale"
              anchor="top middle"
              self="bottom middle"
              :offset="[10, 10]"
            >
              <strong>Ver más</strong>
            </q-tooltip>
          </q-btn>
          <!-- edit button -->

          <!-- delete button -->
          <q-btn flat @click="deleteRecord(props.row.entryId)" icon="delete" color="negative">
            <q-tooltip
              content-style="font-size: 14px"
              transition-show="scale"
              transition-hide="scale"
              anchor="top middle"
              self="bottom middle"
              :offset="[10, 10]"
            >
              <strong>Borrar</strong>
            </q-tooltip>
          </q-btn>
          <!-- delete button -->
        </q-td>
      </template>
      <!-- action buttons -->
    </q-table>
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
      columns: [
        {
          name: "type",
          //   required: true,
          label: "Tipo",
          field: (row) => row.type,
          format: (val) =>
            val === "car" ? "Auto" : val === "van" ? "Camioneta" : "Moto", //to capitalize
          sortable: true,
          align: "left"
        },
        {
          name: "plateNumber",
          //   required: true,
          label: "Patente",
          field: (row) => row.plateNumber,
          format: (val) => `${val.replace("_", "")}`,
          sortable: true,
          align: "left"
        },
        {
          name: "entryTime",
          // required: true,
          label: "Horario de ingreso",
          field: (row) => row.entryTime,
          format: (val) => new Date(val).toLocaleString(),
          sortable: true,
          align: "left"
        },
        {
          name: "cost",
          // required: true,
          label: "Monto actual",
          field: (row) => row.cost,
          format: (val) => `$${val}`,
          sortable: true,
          align: "left"
        },
        {
          name: "actions",
          field: "actions",
          label: "Acciones",
          align: "center"
        }
      ]
    };
  },
  methods: {
    editRecord(plateNumber) {
      this.$emit("view-photo", plateNumber);
      // this.$router.push({ name: "edit_user", params: { id: id } });
    },
    async deleteRecord(id) {
      this.$emit("delete-user", id);
    },
    addEntry() {
      this.$emit("add-entry");
    }
  }
});
</script>

<style lang="scss" scoped>
.table__top {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>