const numero = Number(prompt('Digite um numero:')); // mesmo sendo digitado um numero é uma String
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');


numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Raiz quadrada ${numero ** 5}</p>`;
texto.innerHTML = `<p>${numero} é inteiro ${Number.isInteger(numero)}p>`;