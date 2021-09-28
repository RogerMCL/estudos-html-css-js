//OPERADORES ARTIMÉTICOS

//multiplicação
console.log(3 * 5)
//divisão
console.log(8 / 4)
//soma
console.log(2 + 3)
//subtração
console.log(5 - 4)

//resto de divisão
//console.log(8 % 3)
//incremento
let a = 3
a++
console.log(a)
console.log(a++) //incr. depois
console.log(a)
console.log(++a) //incr. antes
//decremetno
let b = 12
b--
console.log(b)

//exponencial
console.log(9 ** 2)

//expressão
console.log((3 + 2) * 5)

//diferente ou igual
console.log(1 == 2)
console.log(1 == "1") //o operador não diferencia number de string
console.log(1 != 2)

//estritamente diferente ou igual
console.log(1 === 2)
console.log(1 === "1") //agora conseguimos diferenciar tipos diferentes
console.log(1 !== 2)

//maior e menor
console.log(1 > 2)
console.log(1 < 2)
console.log(2 >= 2)
console.log(4 <= 7)

//atribuição
let x = 1
console.log(x)
x += 3
console.log(x)
x -= 2
console.log(x)
x *= 4
console.log(x)
x /= 2
console.log(x)
x %= 5
console.log(x)
x ** 2
console.log(x)

//and, or, not
let t = true
let f = false

console.log(t && f)
console.log(t || f)
console.log(!t)
console.log(!f)

//operador ternário de condição
console.log(t && f ? "verdade" : "falso")
console.log(t || f ? "verdade" : "falso")
//se true, então true, senão, false

//Condições FALSY (sempre falso):
//false, 0, -0, null, "", undefined, NaN

//Condições TRUTHY (sempre verdadeiro)
//true, [], {}, "0", "false", -1, Infinity, -Infinity
