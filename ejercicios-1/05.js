function extremosDeUnaLista(lista) {
    let mayor = lista[0];
    let menor = lista[0];
    for (numero of lista) {
        mayor = mayor > numero ? mayor : numero;
        menor = menor < numero ? menor : numero;

    }
    return [mayor, menor];
}

let lalistaenconcreto = [1, 2, 4, -3];
let comprobacion = extremosDeUnaLista(lalistaenconcreto);
console.log(comprobacion);