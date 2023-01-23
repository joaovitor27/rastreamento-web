<template>

  <div class="form-adjustment ">
    <h1 class="title">
      Envie sua dúvida
    </h1>
    <form class="box">
      <div class="field">
        <label class="label">Nome Completo</label>
        <div class="control">
          <input class="input" type="text" placeholder="Ex.: João Vitor da Silva Monteiro">
        </div>
      </div>

      <div class="field">
        <label class="label">Apelido</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input" type="text" placeholder="Ex.: João" value="">
          <span class="icon is-small is-left"><i class="fas fa-user"></i></span>
        </div>
      </div>

      <div class="field">
        <label class="label">Email</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input" type="email" placeholder="Ex.: joaovitor.monteiro.188@gmail.com" value="">
          <span class="icon is-small is-left"><i class="fas fa-envelope"></i></span>
        </div>
      </div>

      <div class="field">
        <label class="label">Digite sua Dúvida</label>
        <div class="control">
          <textarea class="textarea" placeholder="Ex.: Meu rastreador não está funcionando!"></textarea>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link modified-color">Enviar</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "HelpMe"
})
</script>

<style scoped>
.form-adjustment {
  padding: 40px;
}

.modified-color {
  background-color: #0d3b66;
}
</style>
