<!-- Đây là giao diện cho chức năng thống kê thông tin cho người dùng -->
<!-- Được gọi bởi thanh điều hướng -->
<template>
    <p>Thống kê người dùng theo nghề</p>
    <userChart />
    <hr>
    <br>
    <p>Thống kê nhân viên theo chức vụ</p>
    <staffByRoleChart />
    <hr>
<br>
    <p>Thống kê sách theo thể loại</p>
    <div class="bookByGenreChart">
        <bookByGenreChart /> 
    </div>
</template>

<script>
import userChart from '@/components/Chart/user-chart.vue';
import staffByRoleChart from '@/components/Chart/staffByRole.vue';
import bookByGenreChart from '@/components/Chart/book-by-genre-chart.vue';

export default {

    data() {
        return {
        }
    },
    components: {
        userChart,
        staffByRoleChart,
        bookByGenreChart,
    },
}
</script>