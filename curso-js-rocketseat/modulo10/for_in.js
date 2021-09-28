//FOR ... IN
//Um for ... of para objetos

let pessoa = {
    nome: "Roger",
    idade: 24,
    peso: 90
}

for(let prop in pessoa) {
    console.log(prop)
    console.log(pessoa[prop])
}
