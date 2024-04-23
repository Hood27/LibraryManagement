<template>
  <div class="container">
    <Doughnut :data="chartData" :options="chartOptions" :style="myStyles" v-if="loaded" />
  </div>
</template>

<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'vue-chartjs';
import BooksService from '@/services/book.service.js';

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'App',
  components: {
    Doughnut
  },
  data() {
    return {
      loaded: false, //Chuẩn bị data chưa
      chartData: {
        labels: ['Fantasy', 'Scifi', 'Romance', 'Horror', 'Classic', 'Document',],
        datasets: [{
          data: null,
          backgroundColor: [
            '#f3722c',
            '#f9844a',
            '#90be6d',
            '#4d908e',
            '#dda15e',
            '#277da1',
          ],
        },]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      },
    }

  },

  //  Vì vue-chart.js là một single-page html nên khi cập nhật dữ liệu vue có xu hướng render template nhưng chưa render được dữ liệu
  //nên phải viết một hàm async để bảo đảm dữ liệu được render trước khi chart được render. Như ở trên v-if=loaded để check xem dữ
  //liệu được render chưa nếu rồi thì mới tiến hành render chart
  async mounted() {
    this.loaded = false;

    try {
      const user_list = await BooksService.count();
      this.chartData.datasets[0].data = user_list;

      this.loaded = true;
    } catch (error) {
      console.error(error);
    }
  },

  computed: {
    myStyles() {
      return {
        height: `${300}px`,
        position: 'relative'
      }

    },
  },
}

</script>
