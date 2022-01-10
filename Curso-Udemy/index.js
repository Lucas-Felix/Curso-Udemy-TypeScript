function saudacao(nome) {
    return `Bom dia, ${nome}`;
}

const variavel = saudacao('Luiz');
console.log(variavel);


function soma(x = 1, y = 1) { // tudo que está dentro da function está protegido!
    const resultado = x + y;
    return resultado;
    console.log('Olá mundo'); // tudo que está a baixo de return não sera executado!
}
const resultado = soma(4, 2);
console.log(resultado);

const raiz = (n) => {
    return n ** 0.5;
};
console.log(raiz(9));