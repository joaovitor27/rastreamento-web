import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import HelpMe from "@/views/Help.vue";
import MapHome from "@/views/MapHome.vue";
import PageLogin from "@/views/Login.vue";
import PagePerfil from "@/views/Perfil.vue";

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
    },
    {
        path: '/perfil/',
        name: 'perfil',
        component: PagePerfil
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
