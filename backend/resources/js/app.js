import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import Top from "./pages/Top.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [{ path: "/", name: "top", component: Top }],
});

createApp(App).use(router).mount("#app");
