function planPagoUsuario(arr) {
    return arr.filter(u => u.plan !== "free");

};
function cuantosPremium(arr) {
    return arr.reduce((acc, el) =>
        el.plan !== "free" ? acc + 1 : acc, 0);

}

function cuantosMayores(arr) {
    return arr.reduce((acc, el) =>
        el.edad > 17 ? acc + 1 : acc, 0);

}

const listaUsuarios = [
    { edad: 17, nombre: "misu", plan: "premium" },
    { edad: 32, nombre: "fla", plan: "gold" },
    { edad: 32, nombre: "poli", plan: "premium" },
    { edad: 34, nombre: "lau", plan: "free" },
    { edad: 11, nombre: "vlad", plan: "free" },
]



const verifUsuariosPagadores = planPagoUsuario(listaUsuarios);
console.log(verifUsuariosPagadores);
console.log(cuantosMayores(listaUsuarios));
console.log(cuantosPremium(listaUsuarios));
