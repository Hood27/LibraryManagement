import { createApp } from 'vue';
import App from './App.vue';
import "bootstrap/dist/css/bootstrap.min.css";
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle';

import jQuery from 'jquery';
import router from "@/router";

// createApp(App).mount('#app');

createApp(App).use(router).use(bootstrap).use(jQuery).mount('#app')
