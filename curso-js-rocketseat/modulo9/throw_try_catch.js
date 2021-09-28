function sayMyName(name) {
    if(name === "Gaga")
        throw "Don't call me, Gaga!"
        //throw - interrompe todo o programa
    console.log(name)
}

try  {
    sayMyName("Gaga")
} catch(e) { //o erro é capturado e colocado e a string da função throw é colocada na variável 'e'
    console.log(e)
}

console.log("I've never seen one like that before")

//com try/catch, posso continuar o programa mesmo com o erro
