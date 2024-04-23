<template>
    <Bar id="user-chart-id" :options="chartOptions" :data="chartData" v-if="loaded" />
</template>

<script>
import StaffService from "@/services/staff.service";

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

                labels: ['Nhân viên', 'Quản lý', 'Khác'],
                datasets: [{
                    indexAxis: 'y',
                    label: 'Số nhân viên theo chức vụ',
                    data: null,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 205, 86, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                    ],
                    borderColor: [
                        'rgb(255, 99, 132)',
                        'rgb(255, 205, 86)',
                        'rgb(54, 162, 235)',
                    ],
                    borderWidth: 1,

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
            const staff_list = await StaffService.count();
            this.chartData.datasets[0].data =
                staff_list;

            this.loaded = true;
        } catch (error) {
            console.error(error);
        }
    },
}
</script>