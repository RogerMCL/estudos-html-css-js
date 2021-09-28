//FUNÇÃO FOR

for(let i = 0; i <= 20; i++) {
    if (i === 17) {
        continue; 
    //o programa ignora tudo após esta função somente nesta condição
    } else if(i > 13) {
        break;
    //todo o loop é interrompido após esta função
    }

    console.log(i)
}
