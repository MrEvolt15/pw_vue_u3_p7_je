<template>
  <div v-if="pokeCorrecto!=null">
    <h2>Adivina el pokemon de la Imagen</h2>
    <PokemonImagenVue ref="miHijo" :idPokemon="pokeCorrecto.id" :showImg="pokeShow" />
    <PokemonOpcionesVue @getId="validarRespuesta($event)" :opciones="pokemonArr" v-show="!this.gano"/>
  </div>
</template>
<script>
import PokemonImagenVue from "@/components/PokemonImagen.vue";
import PokemonOpcionesVue from "@/components/PokemonOpciones.vue";
import {consultarPokesFachada, obtenerAleatorioFachada} from "@/client/PokemonClient.js";

/* https://pokeapi.co/api/v2/pokemon/${id}
https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.idPokemon}.svg */
export default {
  data() {
    return {
      pokemonArr: [],
      pokeCorrecto: null,
      pokeShow: false,
      gano: false,
    };
  },
  mounted() {
    console.log("Se monto el componente PokemonPageVue");
    this.cargarJuego();
  },
  beforeCreate() {//antes de crear el componente
    console.log("beforeCreate");
  },
  created() {//cuando se crea el componente
    console.log("created");
  },
  beforeMount() {//antes de montar el componente
    console.log("beforeMount");
  },
  updated() {//cuando se actualiza el componente (se ejecuta despues de montar)
    console.log("updated");
  },
  beforeUpdate() {//antes de actualizar el componente (se ejecuta despues de montar)
    console.log("beforeUpdate");
  },
  components: {
    PokemonImagenVue,
    PokemonOpcionesVue,
  },
  methods: {
    async cargarJuego() {
      const arregloPokes = await consultarPokesFachada();
      console.log(arregloPokes);
      this.pokemonArr = arregloPokes;
      const valorAleatorio = obtenerAleatorioFachada(0,3);
      console.log("Este es el aleatorio: "+valorAleatorio);
      this.pokeCorrecto = this.pokemonArr[valorAleatorio];
    },
    validarRespuesta(valor){
      console.log("Validando respuesta");
      console.log(valor);
      const idCorrecto = valor.identificador;
      if(this.pokeCorrecto.id === idCorrecto){
        console.log("Respuesta correcta");

        //this.pokeShow = true;
        this.pokeShow = valor.valor2;
        this.gano = true;
      }else{
        console.log("Respuesta incorrecta");
        this.pokeShow = false;
      }
      const valorHijo = this.$refs.miHijo.idPokemon;
      console.log("Este es el valor del hijo por refs: "+valorHijo);

      console.log(this.$refs.miHijo.propPrueba);
      this.$refs.miHijo.metodoPrueba();


    },
  },
};
</script>
<style>
</style>