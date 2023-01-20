import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";
import HelpMe from "@/views/Help.vue";
import MapHome from "@/views/MapHome.vue";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'MapHome',
        component: MapHome
    },
    {
        path: '/ajuda',
        name: 'Help',
        component: HelpMe
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;