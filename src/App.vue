<template>
  <router-view>
    <PageLogin></PageLogin>
  </router-view>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import PageLogin from "@/views/Login.vue";

export default defineComponent({
  name: "App",
  components: {PageLogin}
});
</script>

<style scoped>

</style>
