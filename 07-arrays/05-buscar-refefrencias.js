const usuarios = [
    { id: 1, nombre: 'flamax' },
    { id: 2, nombre: 'maximus' },
];


const resultado = usuarios.findIndex(usuario =>
    usuario.nombre == 'flamax');
console.log(resultado);
