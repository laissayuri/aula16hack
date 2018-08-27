const fs = require("fs"); //file stystem

fs.writeFile("teste.txt", "Hello", (erro) =>{ //erro é call back. Só executa depois de ter gravado o arquivo. dá um delay
    if(erro){
        console.log("Não foi possível gravar o arquivo");
        console.log(erro);
    } else {
        console.log("o arquivo foi gravado!");
    }
});

console.log("Oi"); //vai aparecer no console ANTES que a mensagem de erro