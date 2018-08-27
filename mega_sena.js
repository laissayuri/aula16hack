const fs = require("fs"); //file stystem

let numeros = [];

while (numeros.length < 6){
    let numero = Number(Math.ceil(Math.random()*60)+1);;
    if(numeros.indexOf(numero) === -1){
        numeros.push(numero);
    }
}

let numerosstring = numeros.join("-");//separa os numeros por - em vez de ,

fs.writeFile("megasena.txt", numerosstring, (erro) =>{
    if(erro){
        console.log("Não foi possível gravar o arquivo");
        console.log(erro);
    } else {
        console.log("O arquivo foi gravado!");
    }
});