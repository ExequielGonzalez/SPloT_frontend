<template>
  <div>
    <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
export default {
  name: "PaymentGraph",
  components: {
    apexchart: VueApexCharts
  },

  data() {
    return {
      series: [
        {
          name: "Efectivo",
          data: []
        },
        {
          name: "Tarjeta",
          data: []
        },
        {
          name: "Debito",
          data: []
        }
      ],
      chartOptions: {
        chart: {
          type: "bar",
          height: 350,
          stacked: true,
          stackType: "100%"
        },
        plotOptions: {
          bar: {
            horizontal: true,
            endingShape: "rounded"
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          //   show: true,
          width: 2,
          colors: ["transparent"]
        },
        title: {
          text: "Metodos de pago"
        },
        xaxis: {
          categories: [],
          labels: {
            formatter: function (val) {
              return val + "%";
            }
          }
        },
        yaxis: {
          title: {
            text: undefined
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val;
            }
          }
        },
        legend: {
          position: "top",
          horizontalAlign: "left",
          offsetX: 40
        }
      }
    };
  },
  methods: {
    updateChart(days, cash, creditCard, debitCard) {
      this.series = [
        {
          name: "Efectivo",
          data: cash
        },
        {
          name: "Credito",
          data: creditCard
        },
        {
          name: "Debito",
          data: debitCard
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