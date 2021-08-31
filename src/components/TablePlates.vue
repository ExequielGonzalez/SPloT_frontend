<template>
  <div class="q-pa-md">
    <q-table
      :dense="$q.screen.lt.md"
      title="Plates"
      :columns="columns"
      :data="users"
      row-key="id"
      :rows-per-page-options="[15]"
      :visible-columns="visibleColumns"
    >
      <!-- visible columns -->
      <template v-slot:top>
        <h6>Lista de patentes activas</h6>
        <q-space />

        <q-select
          v-model="visibleColumns"
          multiple
          outlined
          dense
          options-dense
          :display-value="$q.lang.table.columns"
          emit-value
          map-options
          :options="columns"
          option-value="name"
          options-cover
          style="min-width: 150px"
          color="primary"
          standout="bg-primary text-black"
        />
      </template>
      <!-- visible columns -->
      <!-- actions buttons -->
      <template v-slot:body-cell-actions="props">
        <q-td key="actions" :props="props">
          <!-- edit button -->
          <q-btn flat @click="editRecord(props.row.id)" icon="visibility" color="primary">
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
          <q-btn flat @click="deleteRecord(props.row.id)" icon="delete" color="negative">
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
    users: Array
  },
  data() {
    return {
      visibleColumns: ["name", "last-name", "email", "actions"],
      columns: [
        {
          name: "name",
          //   required: true,
          label: "Tipo",
          field: (row) => row.firstName,
          format: (val) => `${val}`,
          sortable: true,
          align: "left"
        },
        {
          name: "last-name",
          //   required: true,
          label: "Patente",
          field: (row) => row.lastName,
          format: (val) => `${val}`,
          sortable: true,
          align: "left"
        },
        {
          name: "email",
          required: true,
          label: "Horario de ingreso",
          field: (row) => row.email,
          format: (val) => `${val}`,
          sortable: true,
          align: "left"
        },
        {
          name: "email",
          required: true,
          label: "Monto actual",
          field: (row) => row.email,
          format: (val) => `${val}`,
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
    editRecord(id) {
      this.$router.push({ name: "edit_user", params: { id: id } });
    },
    async deleteRecord(id) {
      this.$emit("delete-user", id);
    }
  }
});
</script>

<style>
</style>