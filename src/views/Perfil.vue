<template>
  <div class="my-padding">
    <h1 class="title">
      Perfil do Usuário:
    </h1>
    <form class="box">
      <fieldset disabled>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <label class="label">Nome Completo</label>
              <p class="control is-expanded">
                <input class="input" type="text" placeholder="Nome Completo" :value="user.full_name">
              </p>
            </div>
            <div class="field">
              <label class="label">Usuário</label>
              <p class="control is-expanded has-icons-left">
                <input class="input is-success" type="text" placeholder="username" :value="user.nickname">
                <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
              </p>
            </div>
          </div>
        </div>
        <div class="field">
          <label class="label">Email</label>
          <p class="control is-expanded has-icons-left">
            <input class="input" type="email" placeholder="e.g. alex@example.com" :value="user.email">
            <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
          </p>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <label class="label">CPF</label>
              <p class="control is-expanded">
                <input class="input" type="text" placeholder="000.000.000-00" :value="user.cpf">
              </p>
            </div>
            <div class="field">
              <label class="label">Telefone</label>
              <p class="control is-expanded has-icons-left">
                <input class="input is-success" type="tel" placeholder="(00) 9 0000-0000" :value="user.cell_phone">
                <span class="icon is-small is-left">
                <i class="fas fa-phone"></i>
              </span>
              </p>
            </div>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent} from "vue";
import {useStore} from "vuex";
import {key} from "@/store";


export default defineComponent({
  name: "PagePerfil",
  components: {},
  setup() {
    const store = useStore(key)
    return {
      user: computed(() => store.state.user)
    }
  }
})
</script>

<style scoped>
.my-padding {
  padding: 40px;
}
</style>
