<template>
  <div>
    <div class="row q-mb-md justify-center">
      <div class="col-xs-4 col-sm-3 col-md-4 col-lg-3 col-xl-2 q-px-sm q-pb-md">
        <q-input
          label="Fecha Inicio"
          outlined
          dense
          v-model="startDate"
          mask="##/##/####"
          @input="onStartDateChange"
          disable
        />
      </div>
      <div class="col-xs-4 col-sm-3 col-md-4 col-lg-3 col-xl-2 q-px-sm q-pb-md">
        <q-input
          label="Fecha Fin"
          outlined
          dense
          v-model="endDate"
          mask="##/##/####"
          @input="onEndDateChange"
          disable
        />
      </div>
      <div class="col-xs-2 col-sm-1 self-center q-pb-md">
        <q-btn icon="event" color="primary">
          <q-popup-proxy
            ref="qPopupProxyRangeEmployeeRecordsRef"
            transition-show="scale"
            transition-hide="scale"
          >
            <q-date
              v-model="rangeDate"
              range
              mask="DD/MM/YYYY"
              @update:model-value="updateRangeDate"
            >
              <div class="row items-center justify-end q-gutter-sm">
                <q-btn label="Cerrar" color="primary" flat v-close-popup />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-btn>
      </div>
      <div class="col-xs-12 col-sm-2 col-md-1 self-center text-center q-pb-md">
        <q-btn color="primary" outline label="Buscar" v-on:click="didTapSearchByRange" />
        <!-- :loading="Loading" -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    employees: Array
  },
  data() {
    return {
      rangeDate: {},
      endDate: "",
      startDate: ""
    };
  },
  computed: {},
  methods: {
    onStartDateChange(value) {
      console.log("onStartDateChange: ", value);
    },
    onEndDateChange(value) {
      console.log("onEndDateChange: ", value);
    },
    didTapSearchByRange(value) {
      if (this.startDate !== "" && this.endDate !== "") {
        // console.log(this.rangeDate);
        this.$emit("date-change", this.rangeDate);
      }
    },
    updateRangeDate(value) {
      console.log(value);
      this.startDate = value.from;
      this.endDate = value.to;
      this.rangeDate = {
        from: this.toDate(value.from),
        to: this.toDate(value.to)
      };
      console.log(value, this.rangeDate);
    },
    toDate(dateStr) {
      const [day, month, year] = dateStr.split("/");
      return new Date(year, month - 1, day, 23, 0).getTime() / 1000;
    }
  }
};
</script>

<style>
</style>
