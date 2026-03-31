function desconto(desconto, valor){
const desc = valor * desconto / 100;
const valorfinal = valor - desc
console.log(valorfinal)
}

desconto(20, 80);