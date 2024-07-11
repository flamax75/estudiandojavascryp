let olistadenumere = [1, 2, -3, -4, -5, 3];


function cuantospositivoshay(deunalista) {
    cantidad = 0;
    for (cadanumerodeunalista of deunalista) {
        if (cadanumerodeunalista > 0) {
            cantidad++;
        }

    }
    return cantidad;
}

let prueba = cuantospositivoshay(olistadenumere);
console.log(prueba);
