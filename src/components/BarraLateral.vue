<template>
    <aside class="menu">
        <div class="manu-label" style="display: flex; align-items: center; justify-content: center; margin-bottom: 10px;">
            <figure class="image is-128x128"  style="text-align: center;">
                <img src="../assets/logo_rastramento_jv_fundo_banco.png" alt="">
            </figure>
        </div>
        <hr>
        <ul class="menu-list" style="text-align:left ;">
            <li><a href="#">
                <span class="icon-text">
                    <span class="icon">
                        <i class="fas fa-lock"></i>
                    </span>
                    <span>Bloquear Veículo</span>
                </span>
            </a></li>
            <li><a href="#">
                <span class="icon-text">
                    <span class="icon">
                        <i class="fas fa-map-location-dot"></i>
                    </span>
                    <span>Rotas do Veículo</span>
                </span>
            </a></li>
          <li><a href="#">
                <span class="icon-text">
                    <span class="icon">
                        <i class="fas fa-circle-info"></i>
                    </span>
                    <span>Ajuda</span>
                </span>
          </a></li>
        </ul>

    </aside>


</template>

<script lang="ts">
  import { defineComponent } from "vue";
  export default defineComponent({
      name: 'BarraLateral'
  })
</script>

<style scoped>
aside {
    padding: 1rem;
    background: #0d3b66;
    width: 100%;
    height: 100vh;
}
a{
    color: #fff;
    font-size:medium;
}

h1 {
    text-align: center;
}

@media only screen and (max-width: 768px) {
    aside {
        padding: 2.5rem;
        height: auto;
    }
}
</style>