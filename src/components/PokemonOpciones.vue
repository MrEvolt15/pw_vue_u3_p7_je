<template>
  <div class="options-container">
    <!-- estas opciones las va a enviar el padre -->
    <ul>
      <li @click="seleccionado(poke.id)" v-for="poke in opciones" :key="poke.id">{{poke.nombre}}</li>
      
    </ul>
  </div>
</template>
<script>
export default {
    props: {
        opciones: {
            type: Array,
            required: true,
        },
    },
    methods: {
        seleccionado(id){
            console.log("Hizo click");
            console.log(id);
            const objetoEnviado = {
                identificador: id,
                valor2: true,
                valor3: "Pokemado",
            };
            
            this.$emit("getId", objetoEnviado);
        }
    },
};
</script>
<style>
.options-container{
    display: flex;
    justify-content: center;
}
ul{
    list-style: none;
}
li{
    background-color: white;
    width: 250px;
    padding: 10px;
    margin: 5px;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
}
li:hover{
    background-color: rgba(0, 0, 0, 0.05);
}
</style>