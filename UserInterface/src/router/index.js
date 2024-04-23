import { createWebHistory, createRouter } from "vue-router";
import "vue-router";

//views
import Library from "@/views/Library.vue"
import Introduction from '@/views/Introduction.vue';
import Map from "@/views/LibraryMap.vue";


const routes = [
    //Trang thư viện
    {
        path: "/",
        name: "library",
        component: Library,
    },

    //Trang giới thiệu
    {
        path: "/introduction",
        name: "library.introduction",
        component: Introduction,
    },

    //Trang sơ đồ thư viện
    {
        path: "/libraryMap",
        name: "library.map",
        component: Map,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;