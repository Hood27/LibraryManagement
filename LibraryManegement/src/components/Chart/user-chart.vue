<template>
    
    <Bar
        id="user-chart-id"
        :options="chartOptions"
    :data="chartData"
    v-if="loaded"
    />

</template>

<script>
import ContactService from "@/services/contact.service";

import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      loaded: false, //Chuẩn bị data chưa

      chartData: {
        labels: [ 'Sinh viên', 'Đi làm', 'Khác' ],
        datasets: [{
          barPercentage: 0.5,
          categoryPercentage: 1.0,
          label: 'Số người theo công việc',
          data :null,
          backgroundColor: [
            '#f3722c',
            '#f9844a',
            '#90be6d',
          ],
        }]
      },
      chartOptions: {
        responsive: true
      }
    }
  },

  async mounted() {
    this.loaded = false;

    try {
      const user_list = await ContactService.count();
      this.chartData.datasets[0].data = user_list;

      this.loaded = true;
    } catch (error) {
      console.error(error);
    }
  },
}
</script>