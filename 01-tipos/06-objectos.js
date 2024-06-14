let nombre = "Harley";
let raza = "perro";
let edad = 3


let bicho = {
    nombre: "Harley",
    raza: "perro",
    edad: 3,
};

bicho.nombre = "Tango";
delete bicho.edad;
console.log(bicho);
console.log(bicho.nombre);
console.log(bicho['nombre']);




