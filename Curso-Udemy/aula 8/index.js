// Luis Otávio Miranda tem 30 anos, pesa 84 kg
// tem 1.8 de altura e seu IMC  é de 25.8888888888
// Luis Otávio nasceu em 1999

const nome = 'Luis Otávio';
const sobrenome = 'Miranda';
const idade = 21;
const peso = 75;
const altura = 1.80;
let imc; // calculo imc = peso / (altura * altura)
let anoNascimento; // idade menos ano atual

imc = peso / (altura * altura);
anoNascimento = 2021 - idade;
console.log(imc);
console.log(anoNascimento);

// console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg');
// console.log('tem', altura, 'de altura e seu IMC é de', imc);
// console.log(nome, 'nasceu em', anoNascimento,'.');

console.log(`${nome} ${sobrenome} tem ${idade} anos e pesa ${peso} kg`);
console.log(`tem altura de ${altura} e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);
