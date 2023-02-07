import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import HelpMe from "@/views/Help.vue";
import MapHome from "@/views/MapHome.vue";
import PageLogin from "@/views/Login.vue";
import PagePerfil from "@/views/Perfil.vue";
import HomePage from "@/views/Home.vue";
import beforeEach from "@/routes/beforeEach";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/map',
        name: 'MapHome',
        component: MapHome
    },
    {
        path: '/ajuda',
        name: 'Help',
        component: HelpMe
    },
    {
        path: '/login',
        name: 'login',
        component: PageLogin
    },
    {
        path: '/perfil',
        name: 'perfil',
        component: PagePerfil
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach(beforeEach)

export default router;
