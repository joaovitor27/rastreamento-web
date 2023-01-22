import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import HelpMe from "@/views/Help.vue";
import MapHome from "@/views/MapHome.vue";
import PageLogin from "@/views/Login.vue";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'MapHome',
        component: MapHome
    },
    {
        path: '/ajuda/',
        name: 'Help',
        component: HelpMe
    },
    {
        path: '/login/',
        name: 'login',
        component: PageLogin
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;