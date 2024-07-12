function precioconiva(precio, iva) {
    return precio + precio * iva;
}

let preciofinal = precioconiva(100, 0.21);
console.log(preciofinal);

