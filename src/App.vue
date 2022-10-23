<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-2">
      <BarraLateral style="text-align: center;"></BarraLateral>
    </div>
    <div class="column">
      <MapRastreio></MapRastreio>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import MapRastreio from './components/map.vue'

export default defineComponent({
  name: "App",
  components: { BarraLateral, MapRastreio }
});
</script>

<style scoped>

</style>
