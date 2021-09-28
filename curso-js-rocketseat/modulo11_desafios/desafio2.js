//DESAFIO 2: Fluxo de caixa familiar

let gastosFamilia = {
    receitas: [1200, 500, 800],
    despesas: [750, 400, 350]
}

function somaValores(valores) {
    let total = 0
    for(valor of valores) {
        total += valor
    }
    return total
}

let somaRec = somaValores(gastosFamilia.receitas)
let somaDesp = somaValores(gastosFamilia.despesas)
console.log(`Soma Receitas: R$${somaRec}`)
console.log(`Soma Despesas: R$${somaDesp}`)
let saldo = somaRec - somaDesp
console.log(`Saldo total: R$${saldo}`)

if(saldo >= 0) {
    if(saldo == 0) {
        console.log("Nenhum lucro!")
    } else {
        console.log("Saldo POSITIVO!")
    }
} else {
    console.log("Saldo NEGATIVO!")
}
