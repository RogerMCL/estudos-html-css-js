//Posso colocar funções em variáveis

/*const soma = function(a, b) {
    console.log(a + b)
}

soma(2, 3)*/

//Retornando valores
const soma = function(a, b) {
    s = a + b
    return s
}
//Agora posso formatar o valor da função num console.log
let x = 8
let y = 5
console.log(`A soma de ${x} e ${y} é ${soma(x, y)}`)
