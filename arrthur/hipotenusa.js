function calcularhipotenusa(cateto1, cateto2){
    const valor = Math.hypot (cateto1, cateto2);
    return valor;
}

const resultado = calcularhipotenusa(3,4);
console.log(resultado)