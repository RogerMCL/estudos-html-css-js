//Outra forma de criar funções utilizando o arrow function (=>)

const SayMyName = () => {
    console.log("Roger")
}

const SayMyName2 = (name) => {
    console.log(name)
}

SayMyName()
SayMyName2("João")

//Callback function

function SayMyName3(name) {
    name()
}

SayMyName3 (
    () => { //função name
        console.log('Estou em uma callback')
    }
)
