//Conversão de dados

console.log("9" + 5)
console.log(Number("9") + 5)
console.log(String(1) + " real")
console.log(String(321).length)
//função length só funciona com variáveis de tipo string

//Manipulação de strings e números

let number = 23.46321
console.log(number)
console.log(number.toFixed(3))
console.log(number.toFixed(2).replace(".",","))

let nome = "Roger"
console.log(nome.toUpperCase())
console.log(nome.toLowerCase())

let frase = "Bom dia a todos"
let array = frase.split(" ")
console.log(array)
let newArray = array.join("_")
console.log(newArray)

console.log(frase.includes("amor"))
console.log(frase.includes("dia"))