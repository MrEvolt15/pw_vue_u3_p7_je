<template>
  <h1>Formulario Persona</h1>
  <form>
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" v-model="nombre">
    
    <label for="apellido">Apellido:</label>
    <input type="text" id="apellido" v-model="apellido">
    
    <label for="fecha">Fecha Nacimiento:</label>
    <input type="date" id="fecha" v-model="edad">
  </form>
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
form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

label {
  margin-top: 10px;
  font-weight: bold;
}

input {
  margin-top: 5px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  margin-top: 20px;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>