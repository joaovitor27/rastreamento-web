<template>
  <MapTracking></MapTracking>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import MapTracking from '../components/map.vue'
export default defineComponent({
  name: "MapHome",
  components: {MapTracking}
})
</script>

<style scoped>

</style>