import { createWebHistory, createRouter } from "vue-router";

import Library from "@/views/Library.vue"
import Introduction from '@/views/Introduction.vue';
import DataChart from '@/views/DataChart.vue';
import AddBook from '@/views/BookAdd.vue';
import BookBorrow from '@/views/BookBorrow.vue';
import Login from '@/views/Login.vue';
import BorrowList from '@/views/Borrow.vue';

const routes = [

    //Trang đăng nhập
    {
        path: "/",
        name: "library.login",
        component: Login,
    },

    //Trang thư viện
    {
        path: "/library",
        name: "library",
        component: Library,
    },

    //Trang giới thiệu
    {
        path: "/introduction",
        name: "library.introduction",
        component: Introduction,
    },

    //Trang thống kê
    {
        path: "/dataChart",
        name: "library.chart",
        component: DataChart,
    },

    //Trang thêm sách
    {
        path: "/addBook",
        name: "library.add",
        component: AddBook,
    },

    //Trang chỉnh sửa thông tin sách
    {
        path: "/editBook/:id",
        name: "library.edit",
        component: () => import('../views/BookEdit.vue'),
        props: true
    },

    //Trang mượn sách
    {
        path: "/borrow",
        name: "library.borrow",
        component: BookBorrow,
    },

    //Trang danh sách đang được mượn
    {
        path: "/borrowList",
        name: "library.borrowList",
        component: BorrowList, 
    },

    
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;