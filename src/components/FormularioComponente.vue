<template>
  <h1>Formulario Persona</h1>

  <label for="id">Id:</label>
  <input type="text" id="id" v-model="id" />

  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" v-model="nombre" />

  <label for="apellido">Apellido:</label>
  <input type="text" id="apellido" v-model="apellido" />

  <label for="fecha">Fecha Nacimiento:</label>
  <input type="date" id="fecha" v-model="fecha" />

  <div class="botones">
    <button @click="consultar()">Consultar</button>
    <button @click="guardar()">Guardar</button>
    <button @click="actualizar()">Actualizar</button>
    <button @click="actualizarParcial()">Actualizar Parcial</button>
    <button @click="eliminar()">Elimniar</button>
  </div>
</template>
   
  <script>
import {
  obtenerPorIdFachada,
  insertarFachada,
  actualizarCompletoFachada,
  actualizarParcialFachada,
  eliminarFachada
} from "@/client/PersonaClient.js";
export default {
  data() {
    return {
      id: "",
      nombre: "",
      apellido: "",
      fecha: "",
    };
  },
  mounted() {
    console.log("Componente montado");
    obtenerPorIdFachada(4);
  },
  methods: {
    async consultar() {
      console.log("Consultar");
      const data = await obtenerPorIdFachada(this.id);
      this.nombre = data.nombre;
      this.apellido = data.apellido;
      this.fecha = data.fechaNacimiento;
    },
    async guardar() {
      const bodyPersona = {
        nombre: this.nombre,
        apellido: this.apellido,
        fechaNacimiento: this.fecha,
      };
      await insertarFachada(bodyPersona);
    },
    async actualizar() {
      const bodyPersona = {
        nombre: this.nombre,
        apellido: this.apellido,
        fechaNacimiento: this.fecha,
      };
      await actualizarCompletoFachada(this.id, bodyPersona);
    },
    async actualizarParcial() {
      const bodyPersona = {
        nombre: this.nombre,
        apellido: this.apellido,
        fechaNacimiento: this.fecha,
      };
      await actualizarParcialFachada(this.id, bodyPersona);
    },
    async eliminar() {
      await eliminarFachada(this.id);
    },
  },
};
</script>
   
  <style>
body {
  background-color: #e0f7fa;
  color: #01579b;
  font-family: Arial, sans-serif;
}

h1 {
  color: #0277bd;
}
label {
  display: block;
  margin: 10px 0 5px;
}
.botones {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
input[type="text"],
input[type="date"] {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #0288d1;
  border-radius: 3px;
}

button {
  background-color: #0288d1;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;
}

button:hover {
  background-color: #0277bd;
}
</style>