<template>
  <section class="hero is-fullheight">
    <div class="hero-body has-text-centered">
      <div class="login">
        <h1 class="title">Bem Vindo ao JV Rastreamento!</h1>
        <form-login></form-login>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import FormLogin from '../components/FormLogin.vue'

export default defineComponent({
  name: "PageLogin",
  components: {FormLogin}
})
</script>
<style scoped>
* {
  font-family: 'Nunito Sans', sans-serif;
}

:root {
  --shadowDark: #D9DDE6;
  --background: #E4E9F2;
  --shadowLight: #EFF5FE;
}

body {
  background: var(--background);
}

.hero-body {
  justify-content: center;
}

.login {
  border-radius: 25px;
  padding: 1.5rem;
  box-shadow: 8px 8px 15px var(--shadowDark), -8px -8px 15px var(--shadowLight);
}

input {
  background: var(--shadowDark) !important;
}

a {
  font-weight: 600;
}

</style>
