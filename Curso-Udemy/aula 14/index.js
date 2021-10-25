//Padrão que o JS utiliza para contas = IEEE 754-2008

let num1 = 0.7; //Number
let num2 = 0.1; //Number

//console.log(num1 + num2) = equação não perfeita 

num1 += num2; // 0.8
num1 += num2; // 0.9
num1 += num2; // 1.0
// num1 = (num1 * 100) + (num2 * 100) / 100 Forma de resolver equação por conta
// num1 = parseFloat(num1.toFixed(2)); Maneira de resolver imperfeição

console.log(num1);
console.log(Number.isInteger(num1));

//Conversão de string para number para equação sempre sera a melhor forma.
// console.log(num1.toString() + num2);     Se um dos números for string é realizado a concatenação
//console.log(typeof num1.toString(2));     toString() binária
//console.log(num1.toFixed(2)); toFixed()   Arredondado para cada decimais
//console.log(Number.isInteger(num1));      isInteger() retorna um valor boolean = num1 é igual a inteiro ou não?

// let temp = num1 * '5';                   Não é uma boa pratica de programação fazer contas utilizando string
// console.log(temp);

//console.log(Number.isNaN(temp));          essa conta é invalida?