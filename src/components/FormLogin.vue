<template>
  <form @submit.prevent="submit()">
    <div class="field">
      <div class="control">
        <input class="input is-medium is-rounded" v-model="form.email" type="email" placeholder="joao@exemplo.com"
               required/>
      </div>
    </div>
    <div class="field">
      <div class="control">
        <input class="input is-medium is-rounded" v-model="form.password" type="password" placeholder="**********"
               required/>
      </div>
    </div>
    <br/>
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
import {loginUserStore} from "@/store";
import {ACTION_SIGNOUT, ACTIONS_LOGIN} from "@/store/typeActions";

export default defineComponent({
  name: 'FormLogin',
  data: () => ({
    form: {
      email: '',
      password: ''
    }
  }),
  methods: {
    async submit() {
      try {
        await this.store.dispatch(ACTIONS_LOGIN, this.form).then(async response => {
          console.log('deu certo')
          await this.$router.push({name: 'HomePage'}).catch((e) => {console.log(e)})
        })
      } catch (err) {
        await this.store.dispatch(ACTION_SIGNOUT)
        alert(err.data ? err.data.message : 'Não foi possível fazer login')
      }

    }
  },
  setup() {
    const store = loginUserStore()
    return {store}
  }
})
</script>

<style scoped>

.color-my-button {
  background: #0d3b66;
  color: white
}

</style>
