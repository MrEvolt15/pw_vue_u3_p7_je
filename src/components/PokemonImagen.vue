<template>
  <div class="pokecontainer">
    <img :src="imgPoke" alt="Imagen no encontrada" class="ocultar" v-show="!showImg" />
    <img :src="imgPoke" alt="Imagen no encontrada" v-show="showImg"/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      propPrueba: "Este texto es de prueba",
    };
  },
  props: {
    idPokemon: {
      type: Number,
      required: true,
    },
    showImg: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  computed: {
    imgPoke() {

      /*return (
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" +
        this.idPokemon +
        ".svg"
      );*/
      /*                                                                                            aqui va codigo javascript*/
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.idPokemon}.svg`;
    },
  },
  methods: {
    metodoPrueba() {
      console.log("Este es un metodo de prueba ejecutado desde el padre");
    },
  },
};
</script>
<style>
.pokecontainer {
  height: 350px;
}
.ocultar {
  filter: brightness(0);
}
img {
  height: 200px;
  width: 200px;
  margin-top: 10px;
  /*Para que deje de respetar la posision de los demas elementos, quitarle del espacio que ocupa en el display*/
  position: absolute;
  right: 43%;
  top: 27%;
}
</style>