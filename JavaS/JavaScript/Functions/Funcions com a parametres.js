function calcular(a, b ,operacio) {
    return operacio(a, b);
}

const sumar = (a, b) => {
    return a + b;
}
const restar = (a, b) => {
    return a - b;
}

console.log(calcular(8,2,sumar()));
console.log(calcular(8,2,restar()));