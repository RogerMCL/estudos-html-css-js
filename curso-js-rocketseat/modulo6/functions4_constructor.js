//Funcão constructor
//Cria um objeto

function Person(name) {
    this.name = name,
    this.idade = 20
    this.walk = function() {
        return this.name + " está andando"
    }
}

const Roger = new Person("Roger")
const João = new Person("João")

console.log(Roger.walk())
console.log(João.walk())
