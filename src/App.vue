<template>
  <div id="app" class="container-fluid mt-3">
    <div class="jumbotron">
      <Entrada />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Entrada from "./componentes/Entrada.vue";

export default {
  name: "App",
  components: {
    Entrada,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
#app {
}

h1 {
  color: blue;
}

.jumbotron {
  padding: 32px !important;
}

hr {
  color: #222;
}
</style>
