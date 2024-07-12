let listadodeUsuarios = [
    { id: 1, name: 'Fla', },
    { id: 2, name: 'Lau', },
    { id: 3, name: 'Miau', }];

function damePares(arr) {
    let pares = [];
    for (idx in arr) {
        let elemento = arr[idx];
        pares[idx] = [elemento.name, elemento];
    }
    return pares;
}

let prueba = damePares(listadodeUsuarios);
console.log(prueba);
console.log(listadodeUsuarios);