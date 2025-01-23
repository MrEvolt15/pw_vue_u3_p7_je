<template>
  <div v-if="pokeCorrecto!=null">
    <h2>{{intentos}}</h2>
    <h2 v-if="this.gano">Ganaste!!!!!!!!!!</h2>
    <h2 v-if="this.intentos === 3">Perdiste!!!!!!!!!!!</h2>
    <h2>Adivina el pokemon de la Imagen</h2>
    <PokemonImagenVue ref="miHijo" :idPokemon="pokeCorrecto.id" :showImg="pokeShow" />
    <PokemonOpcionesVue @getId="validarRespuesta($event)" :opciones="pokemonArr" v-show="!this.gano"/>
    
    <button v-if="this.gano || this.intentos===3" @click="this.cargarJuego">Volvel a Jugar</button>
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
      intentos: 0,
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
      this.pokeShow = false;
      this.gano = false;
      this.intentos = 0;
    },
    validarRespuesta(valor){
      console.log("Validando respuesta");
      console.log(valor);
      const idCorrecto = valor.identificador;
      if(this.pokeCorrecto.id === idCorrecto){
        console.log("Respuesta correcta");

        //this.pokeShow = true;
        this.pokeShow = valor.valor2;
        if(this.intentos !==3){
          this.gano = true;
        }
      }else{
        console.log("Respuesta incorrecta");
        this.pokeShow = false;
        this.intentos++;
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
button{
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>