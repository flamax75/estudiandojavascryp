function valAbsoluto(arr) {
    return arr.map(n => Math.abs(n));

}



const aleatArr = [1, -2, 3, -5];
const prueba = valAbsoluto(aleatArr);
console.log(prueba);