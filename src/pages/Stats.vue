<template>
  <q-page class="q-pa-md">
    <bar-graph ref="barGraphRef" />
  </q-page>
</template>

<script >
import { defineComponent, ref } from "vue";

import BarGraph from "src/components/BarGraph.vue";
import { getMoneyEarnByPeriod } from "src/utils/http-handler";

export default defineComponent({
  name: "Stats",
  components: { BarGraph },

  data() {
    return {};
  },
  mounted() {
    this.getMoneyEarn();
  },
  methods: {
    async getMoneyEarn() {
      let counter = 10;
      const result = await getMoneyEarnByPeriod();
      console.log(result);
      let day = [];
      let moneyEarn = [];
      result.data.forEach((t) => {
        day.push(new Date(t.date).toLocaleDateString());
        moneyEarn.push(t.collected + counter);
        counter += 30;
      });
      console.log(day, moneyEarn);
      this.$refs.barGraphRef.updateChart(day, moneyEarn);
    }
  }
});
</script>

<style lang="scss" scoped>
</style>