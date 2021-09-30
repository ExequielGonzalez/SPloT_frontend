<template>
  <q-page class="q-pa-md">
    <SearchDateRange @date-change="getChartsData" />
    <bar-graph ref="barGraphRef" />
    <occupation-graph ref="occupationGraphRef" />
    <payment-graph ref="paymentGraphRef" />
    <!-- <div class="q-pa-md">
      <div class="q-gutter-sm row items-start">
        <q-uploader url="http://localhost:4444/upload" style="max-width: 300px" />
      </div>
    </div>-->
  </q-page>
</template>

<script >
import { defineComponent, ref } from "vue";
import SearchDateRange from "components/SearchDateRange.vue";
import BarGraph from "src/components/BarGraph.vue";
import OccupationGraph from "src/components/OccupationGraph.vue";
import PaymentGraph from "src/components/PaymentGraph.vue";
import {
  getMoneyEarnByPeriod,
  getOccupationByPeriod,
  getPaymentMethodsByPeriod
} from "src/utils/http-handler";

export default defineComponent({
  name: "Stats",
  // components: { BarGraph },
  components: { SearchDateRange, BarGraph, OccupationGraph, PaymentGraph },
  setup() {
    return {
      // files: ref(null),
      // counterLabelFn({ totalSize, filesNumber, maxFiles }) {
      //   return `${filesNumber} files of ${maxFiles} | ${totalSize}`;
      // }
    };
  },

  data() {
    return {};
  },
  mounted() {
    // this.getOccupation();
    // https://apexcharts.com/vue-chart-demos/bar-charts/stacked/
  },
  methods: {
    async getChartsData(value) {
      // console.log(value);
      console.log("from: ", value.from, "to: ", value.to);
      this.getMoneyEarn(value);
      this.getOccupation(value);
      this.getPaymentMethods(value);
    },
    async getMoneyEarn(timeRange) {
      // let counter = 10;
      const result = await getMoneyEarnByPeriod(timeRange.from, timeRange.to);
      console.log(result);
      let day = [];
      let moneyEarn = [];
      result.data.forEach((t) => {
        var ts_hms = new Date(t.date);
        day.push(
          ts_hms.getFullYear() +
            "-" +
            ("0" + (ts_hms.getMonth() + 1)).slice(-2) +
            "-" +
            ("0" + ts_hms.getDate()).slice(-2)
        );
        // day.push(t.date);
        moneyEarn.push(t.collected);
        // counter += 30;
      });
      console.log(day, moneyEarn);
      this.$refs.barGraphRef.updateChart(day, moneyEarn);
    },
    async getOccupation(timeRange) {
      // let counter = 10;
      // const result = await getOccupationByPeriod();
      const result = await getOccupationByPeriod(timeRange.from, timeRange.to);
      console.log(result);
      let days = [];
      let cars = [];
      let motorbikes = [];
      let vans = [];
      Object.values(result.data).forEach((register) => {
        var ts_hms = new Date(register.date);
        days.push(
          ts_hms.getFullYear() +
            "-" +
            ("0" + (ts_hms.getMonth() + 1)).slice(-2) +
            "-" +
            ("0" + ts_hms.getDate()).slice(-2)
        );
        // days.push(register.date.substr(0, 10));
        cars.push(register.cars);
        vans.push(register.vans);
        motorbikes.push(register.motorbikes);
      });
      // console.log(days, cars, vans, motorbikes);

      this.$refs.occupationGraphRef.updateChart(days, cars, motorbikes, vans);
    },

    async getPaymentMethods(timeRange) {
      // let counter = 10;
      // const result = await getOccupationByPeriod();
      const result = await getPaymentMethodsByPeriod(
        timeRange.from,
        timeRange.to
      );
      console.log(result);
      let days = [];
      let cash = [];
      let creditCard = [];
      let debitCard = [];
      Object.values(result.data).forEach((register) => {
        var ts_hms = new Date(register.date);
        days.push(
          ts_hms.getFullYear() +
            "-" +
            ("0" + (ts_hms.getMonth() + 1)).slice(-2) +
            "-" +
            ("0" + ts_hms.getDate()).slice(-2)
        );
        // days.push(register.date.substr(0, 10));
        cash.push(register.cash);
        creditCard.push(register.creditCard);
        debitCard.push(register.debitCard);
      });
      // console.log(days, cars, vans, motorbikes);

      this.$refs.paymentGraphRef.updateChart(days, cash, creditCard, debitCard);
    },

    getFiles(value) {
      console.log(value);
    }
  }
});
</script>

<style lang="scss" scoped>
</style>