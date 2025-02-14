<template>
  <h1>Formulario Persona</h1>
  <button @click="obtener()">Consultar</button>
</template>

<script>
import {obterPorId} from "@/client/PersonaClient.js";
export default {
mounted:{
    async obtener(){
        const persona = await obterPorId(1);
        console.log(persona);
    }
}
}
</script>

<style>

</style>