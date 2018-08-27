//precisa adicionar, listar a tarefa, colocar pendente ou feito e limpar a tabela.

const fs = require("fs");
let tarefas = [];
let tarefa = process.argv[3];

function inserir(){
    tarefas.push({nome:tarefa, status:"pendente"});
    console.log ("A tarefa foi inserida com sucesso");
}

if (process.argv[2] === "inserir"){
    inserir();
}

let tarefasString = JSON.stringify(tarefas);


fs.writeFile("tarefas.json", tarefasString, 'a', (erro) =>{
    if(erro){
        console.log("Não foi possível gravar a lista");
        console.log(erro);
    } else {
        console.log("O arquivo foi gravado!");
    }
});