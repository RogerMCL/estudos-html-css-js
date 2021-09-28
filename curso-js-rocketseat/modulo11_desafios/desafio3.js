//DESAFIO 3: Celsius to Fahrenheit

function CtoF(tc) {
    let tf = (tc * 9/5) + 32
    
    return tf
}

function FtoC(tf) {
    let tc = (tf - 32) * 5/9
    return tc
}

console.log(CtoF(0))
console.log(FtoC(32))
console.log(CtoF(100))
console.log(FtoC(212))
