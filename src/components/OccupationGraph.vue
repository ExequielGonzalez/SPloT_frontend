<template>
  <div>
    <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
export default {
  name: "OccupationGraph",
  components: {
    apexchart: VueApexCharts
  },

  data() {
    return {
      series: [
        {
          name: "Autos",
          data: []
        },
        {
          name: "Motos",
          data: []
        },
        {
          name: "Camionetas",
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
          text: "Ocupación"
        },
        xaxis: {
          categories: [], 
          labels: {
                formatter: function (val) {
                  return val + "%"
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
    updateChart(days, cars, motorbikes, vans) {
      this.series = [
        {
          name: "Autos",
          data: cars
        },
        {
          name: "Motos",
          data: motorbikes
        },
        {
          name: "Camionetas",
          data: vans
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