function dividePorTipos(arr) {
    return {
        numeros: arr.filter(n => typeof n === "number"),
        strings: arr.filter(n => typeof n === "string"),
        objectos: arr.filter(n => typeof n === "object"),

    }

}

const miArray = [
    "Hola",
    12,
    23,
    "Miau",
    {},
    { id: 12 },
    ['MUUU'],
]


const nuevoArray = dividePorTipos(miArray);
console.log(nuevoArray);
