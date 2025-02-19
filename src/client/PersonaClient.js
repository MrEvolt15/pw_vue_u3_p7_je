import axios from 'axios';
 
const obtenerPorId = async (id) => {
    //http://localhost:8080/matriculaAPI/v1.1/personas/2
    //El await se mantiene, pero axios lo pone implicitamente
    const data = axios.get(`http://localhost:8081/matriculaAPI/v1.1/personas/${id}`).then(r => r.data);
    console.log(data);
    return data;
}
const insertar = async (persona) => {
    //http://localhost:8080/matriculaAPI/v1.1/personas
    axios.post(`http://localhost:8081/matriculaAPI/v1.1/personas`, persona).then(r => r.data).then(Response => {
        console.log(Response);
        console.log("Persona insertada con exito");
    }).catch(error => {
        console.log(error);
    });

}
const actualizarCompleto = async (id,persona) => {
    //http://localhost:8080/matriculaAPI/v1.1/personas
    axios.put(`http://localhost:8081/matriculaAPI/v1.1/personas/${id}`, persona).then(r => r.data).then(Response => {
        console.log(Response);
        console.log("Persona actualizada completo con exito");
    }).catch(error => {
        console.log(error);
    });

}
const actualizarParcial = async (id,persona) => {
    //http://localhost:8080/matriculaAPI/v1.1/personas
    axios.patch(`http://localhost:8081/matriculaAPI/v1.1/personas/${id}`, persona).then(r => r.data).then(Response => {
        console.log(Response);
        console.log("Persona actualizada parcial con exito");
    }).catch(error => {
        console.log(error);
    });

}
const eliminar = async (id) => {
    //http://localhost:8080/matriculaAPI/v1.1/personas
    axios.delete(`http://localhost:8081/matriculaAPI/v1.1/personas/${id}`).then(r => r.data).then(Response => {
        console.log(Response);
        console.log("Persona eliminada con exito");
    }).catch(error => {
        console.log(error);
    });

}
 
export const obtenerPorIdFachada = async (id) => {
    return await obtenerPorId(id);
}
export const insertarFachada = async (persona) => {
    await insertar(persona);
}
 
export const actualizarCompletoFachada = async (id,persona) => {
    await actualizarCompleto(id,persona);
}
export const actualizarParcialFachada = async (id,persona) => {
    await actualizarParcial(id,persona);
}
export const eliminarFachada = async (id) => {
    await eliminar(id);
}