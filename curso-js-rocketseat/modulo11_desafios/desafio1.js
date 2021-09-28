// DESAFIO 1: Sistema de notas escolares

function getScore(nota) {
    if(nota >= 90 && nota <= 100) {
        return console.log("A")
    } else if(nota  >= 80 && nota < 90) {
        return console.log("B")
    } else if(nota >= 70 && nota < 80) {
        return console.log("C")
    } else if(nota >= 60 && nota < 70) {
        return console.log("D")
    } else if(nota >= 0 && nota < 60) {
        return console.log("F")
    } else {
        return console.log("NOTA INVÁLIDA!")
    }
}

getScore(80)
getScore(40)
getScore(-34)
getScore(245)
