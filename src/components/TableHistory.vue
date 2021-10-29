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
          <h6>Historial de ingresos</h6>
          <!-- <q-space /> -->

          <q-btn color="primary" label="Añadir ingreso" @click="addEntry" />
        </div>
      </template>
      <template v-slot:body-cell="props">
        <q-td :props="props" class="table__items">
          <span>{{props.value}}</span>
        </q-td>
        <!-- <q-td :props="props" key="cost" class="table__items-price">
          <span>{{props.value.}}</span>
        </q-td>-->
      </template>
      <!-- visible columns -->
      <!-- actions buttons -->
      <template v-slot:body-cell-actions="props">
        <q-td key="actions" :props="props">
          <!-- edit button -->
          <q-btn
            flat
            @click="showPhoto(props.row)"
            icon="visibility"
            :color="props.row.hasPhoto? 'primary': 'grey'"
          >
            <q-tooltip
              content-style="font-size: 14px"
              transition-show="scale"
              transition-hide="scale"
              anchor="top middle"
              self="bottom middle"
              :offset="[10, 10]"
            >
              <strong v-if="props.row.hasPhoto">Ver más</strong>
              <strong v-if="!props.row.hasPhoto">No disponible</strong>
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
          name: "exitTime",
          // required: true,
          label: "Horario de egreso",
          field: (row) => row.exitTime,
          format: (val) => new Date(val).toLocaleString(),
          sortable: true,
          align: "left"
        },
        {
          name: "cost",
          // required: true,
          label: "Ingreso",
          field: (row) => row.paymentAmount,
          format: (val) => `$${val}`,
          sortable: true,
          align: "left"
        },
        {
          name: "paymentMethod",
          // required: true,
          label: "Metodo de pago",
          field: (row) => this.getPaymentMethod(row.paymentMethod),
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
    getPaymentMethod(payment) {
      return payment === "Cash"
        ? "Efectivo"
        : payment === "Credit Card"
        ? "Tarjeta de credito"
        : "Debito";
    },
    showPhoto(vehicle) {
      if (vehicle.hasPhoto) this.$emit("view-photo", vehicle.entryId);
    },
    async deleteRecord(id) {
      this.$emit("delete-user", id);
    },
    addEntry() {
      this.$emit("add-manual-entry");
    }
  }
});
</script>

<style lang="scss" scoped>
.table__top {
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.table__items {
  font-size: 1.4rem;

  @media (max-width: 800px) {
    font-size: 1.1rem;
  }

  &-price {
    color: red;
  }
}
</style>