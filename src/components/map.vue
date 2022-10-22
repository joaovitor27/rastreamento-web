<template>
    <GMapMap ref="MapRatreio" :center="markers[0].position" :zoom="16" map-type-id="terrain" style="width: 100%; height: 100vh">
        
            <GMapMarker :key="index" v-for="(m, index) in markers" :position="m.position"/>
        
    </GMapMap>
</template>

<script lang="ts">
import { defineComponent } from "vue";


export default defineComponent({
    name: 'MapRastreio',
    mounted() {
        this.geolocate();
    },
    methods: {
        geolocate: function () {
            navigator.geolocation.getCurrentPosition(position => {
                this.markers[0].position = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
            });
        },
    },
    data() {
        return {
            
            markers: [
                {   
                    position: {
                        lat: 0.0, lng: 0.0
                    },
                }, // Along list of clusters
            ],
        }
    }
})
</script>

<style scoped>

</style>
