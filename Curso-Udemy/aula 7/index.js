//Não podemos criar constantes com palavras reservadas
//Constantes precisam ter nomes significativos com
//Não pode começar o nome de uma constante com um numero
//Não pode conter espaços ou traços
//Utilizamos camelCase
//Case-sensitive
//Não pode modificar um valor de uma constante
//NÃO UTILIZE VAR, UTILIZE CONST.
//CONST NÃO PODEM SER ALTERADAS AO LONGO DO CÓDIGO
//String = Text / Number = Numero

const nome = 'João';
console.log(nome);

const primeiroNumero = '5'; //Number para o resultado ser number os 2 valores precisam ser numéricos
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;

console.log(resultadoTriplicado);
console.log(typeof(primeiroNumero))         // typeof utilizado para ver o tipo do dado.
console.log(primeiroNumero + segundoNumero) // sinal de + pode ser utilizado para 2 ações dentro do JS
console.log( typeof(primeiroNumero + segundoNumero))                                          // + = utilizado para concatenar strings e também utilizado para soma. 