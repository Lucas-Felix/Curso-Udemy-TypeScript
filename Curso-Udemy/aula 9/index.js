//var pode ser redecorada conforme o código(comportamento não desejável)
//com let não é possível fazer essa redecoração;
// var nome = 'Lucas';
// var nome = 'Gabriel';
// console.log(nome);
// nome = 'Lucas'; sem const ou let a variável vira global

const nome = 'Lucas'; //string = dado primitivo
const nome1 = 'Lucas'; //string = dado primitivo
const nome3 = 'Lucas'; //string = dado primitivo
const num1 = 10; //Number
const num2 = 10.52; //Number
let nomeAluno; //undefined = não aponta para local nenhum na memoria
const sobrenomeAluno = null; //Nulo = não aponta para local em nenhuma memoria
const aprovado = true; // boolean apenas 2 possibilidades de valores = true, false
console.log(typeof nome, nome);

// dados primitivos são string, number, undefined, null, boolean e symbol

let a = 2 ;
const b = a ;

console.log(a, b); // 2, 2
a = 3;
console.log(a, b); // 3, 2
