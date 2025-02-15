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
    axios.post(`http://localhost:8081/matriculaAPI/v1.1/personas`, persona).then(r => r.data);

}
const actualizarCompleto = async (id,persona) => {
    //http://localhost:8080/matriculaAPI/v1.1/personas
    axios.put(`http://localhost:8081/matriculaAPI/v1.1/personas/${id}`, persona).then(r => r.data);

}
const actualizarParcial = async (id,persona) => {
    //http://localhost:8080/matriculaAPI/v1.1/personas
    axios.patch(`http://localhost:8081/matriculaAPI/v1.1/personas/${id}`, persona).then(r => r.data);

}
const eliminar = async (id) => {
    //http://localhost:8080/matriculaAPI/v1.1/personas
    axios.delete(`http://localhost:8081/matriculaAPI/v1.1/personas/${id}`).then(r => r.data);

}
 
export const obtenerPorIdFachada = async (id) => {
    return await obtenerPorId(id);
}
export const insertarFachada = async (persona) => {
    await insertar(persona);
}
 