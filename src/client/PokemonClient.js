
function obtenerAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const obtenerArregloNumerico = () => {
    const arreglo = [];
    for (let i = 0; i < 4; i++) {
        arreglo[i] = obtenerAleatorio(1, 600);
    }
    return arreglo;
}
const getArregloPokes = async (arreglo) => {

    const obj1 = {
        id: arreglo[0],
        nombre: await consumirAPI(arreglo[0])
    };
    const obj2 = {
        id: arreglo[1],
        nombre: await consumirAPI(arreglo[1])
    };
    const obj3 = {
        id: arreglo[2],
        nombre: await consumirAPI(arreglo[2])
    };
    const obj4 = {
        id: arreglo[3],
        nombre: await consumirAPI(arreglo[3])
    };
    const arregloPokes = [obj1, obj2, obj3, obj4];

    return arregloPokes;
}
const consumirAPI = async (id) => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => response.json())
    return data.name;
}

const consultarPokeAleatorio = async () => {

    return await getArregloPokes(obtenerArregloNumerico());
}
//Funciones de fachada
export const consultarPokesFachada = async () => { //exportar varias funciones
    return await consultarPokeAleatorio();
}
export const obtenerAleatorioFachada = (min, max) => {
    return obtenerAleatorio(min,max);
}

/*export default consultarPokesFachada; asi para exportar una sola funcion*/
