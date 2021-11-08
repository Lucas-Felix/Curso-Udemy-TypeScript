const numero = Number(prompt('Digite um numero:')); // mesmo sendo digitado um numero é uma String
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');


numeroTitulo.innerHTML = numero;

texto.innerHTML = '';
texto.innerHTML += `<p>A Raiz quadrada: ${numero ** 5}.</p>`;
texto.innerHTML += `<p>O ${numero} é inteiro?  ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p>O ${numero} é NaN? ${Number.isNaN(numero)}.</p>`;
texto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p>Arredondado para cima: ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}.</p>`;