import {createApp} from 'vue'
import App from './App.vue'

import '@fortawesome/fontawesome-free/css/all.css'
import VueGoogleMaps from '@fawmi/vue-google-maps'
import router from "@/routes";
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faCircleInfo, faLock, faMapLocationDot, faRoute, faUserSecret, faUser} from '@fortawesome/free-solid-svg-icons'
import {key, store} from "@/store";


const app = createApp(App);
library.add(faUserSecret, faRoute, faLock, faMapLocationDot, faCircleInfo, faUser)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(VueGoogleMaps, {
    load: {
        key: process.env.VUE_APP_API_KEY_GOOGLE_MAPS,
    },
})
app.use(store, key)
app.use(router)
app.mount('#app')
