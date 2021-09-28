//Função construtor de arrays

const arrayLetra = Array("a", "b", "c") //Elementos do array
console.log(arrayLetra)

const arrayVazio = Array(10) 
//array vazio de 10 posições
console.log(arrayVazio)

//Transformando string em array

let word = "code"
console.log(Array.from(word))


//Manipulando arrays
let techs = ["html", "css", "js"]
//Adicionar um item no fim
techs.push("react")
//Adicionar no começo
techs.unshift("sql")
//Remover do fim
techs.pop()
//Remover do começo
techs.shift()
//Mostrar só alguns elementos
console.log(techs.slice(1, 3)) //(Posição 1, até o terceiro elemento)
//Tirar elemento de posição específica
//techs.splice(1, 2) //(Tire o elemento da posição um, Exclua 2 elementos a partir do elemento retirado, contando com o elemento retirado)
//Encontrar a posição do array
let index = techs.indexOf("css")
console.log(index)
