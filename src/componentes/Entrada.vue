<template>
  <section class="src-componentes-entrada">
    <div class="jumbotron">
      <h2>Ingrese texto</h2>
      <input type="text" v-model="valor" /> <br />
      <br />
      {{ valor | codificado }}
      <br />
      {{ valor | pasarAmayuscula }}
      <br />
      {{ valor | pasarAminuscula }}
      <br />
      {{ valor | intercalaDesdeMayuscula }}
      <br />
      {{ valor | intercalaDesdeMinuscula }}
    </div>
    <h2>Cantidad de caracteres ingresados</h2>
    {{ cantidadCaracteres }}

    <p>respuestas: 1:b 2:b 3:c 4:b 5:b</p>
  </section>
</template>

<script lang="js">
  
  export default  {
    name: 'src-componentes-entrada',
    props: [],
    mounted () {

    },
    mixins: [],
    data () {
      return {
        valor: '',

      }
    },
    methods: {
       
    },
    computed: {
        cantidadCaracteres(){
        return this.valor.length
      }
    }
}


</script>

<style scoped lang="css">
.src-componentes-estructura {
}

.jumbotron {
  background-color: pink;
  color: brown;
}

hr {
  background-color: #444;
}
</style>
