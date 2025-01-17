function obtenerAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}
const obtenerArregloNumerico = () => {
    const arreglo = [];
    for (let i = 0; i < 4; i++) {
        arreglo[i]=obtenerAleatorio(1, 600);
    }
    return arreglo;
}
const getArregloPokes = (arreglo) => {
    const arregloPokes = [];
    const obj1 = {};
    const obj2 = {};
    const obj3 = {};
    const obj4 = {};
    arregloPokes[0] = obj1;
    arregloPokes[1] = obj2;
    arregloPokes[2] = obj3;
    arregloPokes[3] = obj4;
    return arregloPokes;
}