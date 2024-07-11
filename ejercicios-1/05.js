function comprobandoextremos(deunalista) {
    mayor = deunalista[0];
    menor = deunalista[0];
    for (numero of deunalista) {
        mayor = mayor > numero ? mayor : numero;
        menor = menor < numero ? menor : numero;

    }
    return [mayor, menor];

}


let olistaoarecare = [1, 2, 3, 44, 56, -98];
let lamismacomparacion = comprobandoextremos(olistaoarecare);
console.log(lamismacomparacion);
