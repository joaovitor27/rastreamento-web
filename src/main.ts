import { createApp } from 'vue'
import App from './App.vue'

import '@fortawesome/fontawesome-free/css/all.css'
import VueGoogleMaps from '@fawmi/vue-google-maps'


const app = createApp(App);
app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyDVmz_J75CPS1gUv0S9JIGxiAwp8wWCrcU',
    },
}).mount('#app')
