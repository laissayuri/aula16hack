// console.log(process.argv);

let num1 = Number(process.argv[2]);
let num2 = Number(process.argv[3]);


if(isNaN(num1) || isNaN(num2)){
    console.log ("É necessário informar dois valores");
} else {
    
    let soma = num1 + num2;

    console.log(soma);
}





