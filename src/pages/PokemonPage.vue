<template>
  <div v-if="pokeCorrecto!=null">
    <h2>Adivina el pokemon de la Imagen</h2>
    <PokemonImagenVue :idPokemon="pokeCorrecto.id" :showImg="pokeShow" />
    <PokemonOpcionesVue :opciones="pokemonArr" />
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
    };
  },
  mounted() {
    console.log("Se monto el componente PokemonPageVue");
    this.cargarJuego();
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
  },
};
</script>
<style>
</style>