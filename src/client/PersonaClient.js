import axios from "axios";

const obtenerPorID = async (id) => {
    //http://localhost:8080/matriculaAPI/v1.1/personas/{id}
    const data = axios.get(`http://localhost:8080/matriculaAPI/v1.1/personas/${id}`).then(r=>r.data);
    console.log(data);
    return data;
}
export const obterPorIDFachada = async (id) => { //exportar varias funciones
    return await obtenerPorID(id);
}