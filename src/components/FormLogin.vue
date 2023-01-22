<template>
  <form>
    <div class="field">
      <div class="control">
        <input class="input is-medium is-rounded" type="email" placeholder="joao@exemplo.com" autocomplete="username" required />
      </div>
    </div>
    <div class="field">
      <div class="control">
        <input class="input is-medium is-rounded" type="password" placeholder="**********" autocomplete="current-password" required />
      </div>
    </div>
    <br />
    <button class="button is-block is-fullwidth is-medium is-rounded color-my-button" type="submit">
      Entrar
    </button>
  </form>
  <br>
  <nav class="level">
    <div class="level-item has-text-centered">
      <div>
        <a href="#">Criar uma nova conta</a>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: 'FormLogin'
})
</script>

<style scoped>

.color-my-button{
  background: #0d3b66;
  color: white
}

</style>