// ---------------- Pegando os dados sas pessoas que moram em algum pais X ------------
// const fs = require("fs");

// const dados = require("./dados.json");
// const pais = process.argv[2]; // Escrever pais X
// const dadosFiltrados = [];


// for (let pessoa of dados){
//     if(pessoa.country === pais){
//         dadosFiltrados.push(pessoa);
//     }
// }

// let dadosFiltradosString = JSON.stringify(dadosFiltrados); //converte em string

// fs.writeFile("dados_filtrados.json", dadosFiltradosString, function(deuRuim){
//     if(deuRuim){
//         console.log("Deu ruim");
//         return;
//     }

//     console.log (`foram gravados ${dadosFiltrados.length} registros`);
// });




//---------- DADOS EM UMA TABELA - ARQUIVO CSV --------------
const fs = require("fs");

const dados = require("./dados.json");
const pais = process.argv[2];
const dadosFiltrados = [];
let dadosTabela = "name;company;country\n"
let quantidade = 0;


for (let pessoa of dados){
    if(pessoa.country === pais){
        dadosTabela += `${pessoa.name};${pessoa.company};${pessoa.country}\n`;
        quantidade++;
    }
}

fs.writeFile("dados_filtrados.csv", dadosTabela, function(deuRuim){
    if(deuRuim){
        console.log("Deu ruim");
        return;
    }

    console.log (`foram gravados ${quantidade} registros`);
});