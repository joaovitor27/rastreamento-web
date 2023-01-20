import {createApp} from 'vue'
import App from './App.vue'

import '@fortawesome/fontawesome-free/css/all.css'
import VueGoogleMaps from '@fawmi/vue-google-maps'
import router from "@/routes";
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faUserSecret, faRoute, faLock, faMapLocationDot, faCircleInfo} from '@fortawesome/free-solid-svg-icons'


const app = createApp(App);
library.add(faUserSecret, faRoute, faLock, faMapLocationDot, faCircleInfo)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyDVmz_J75CPS1gUv0S9JIGxiAwp8wWCrcU',
    },
})
app.use(router)
app.mount('#app')
