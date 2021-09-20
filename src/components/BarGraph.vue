<template>
  <div>
    <apexchart width="500" type="bar" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
export default {
  name: "BarGraph",
  components: {
    apexchart: VueApexCharts
  },

  data() {
    return {
      series: [
        {
          name: "Recaudación",
          data: []
        }
      ],
      chartOptions: {
        chart: {
          type: "bar",
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded"
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"]
        },
        xaxis: {
          categories: []
        },
        yaxis: {
          title: {
            text: "Ingresos"
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " pesos";
            }
          }
        }
      }
    };
  },
  methods: {
    updateChart(days, values) {
      this.series = [
        {
          data: values
        }
      ];
      this.chartOptions = {
        ...this.chartOptions,
        ...{
          xaxis: {
            categories: days
          }
        }
      };
    }
  }
};
</script>