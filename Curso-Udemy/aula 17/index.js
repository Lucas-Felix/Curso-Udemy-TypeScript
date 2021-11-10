//                0        1        2
const alunos = ['Luís', 'Maria', 'João']; // sempre tentar manter o array com o mesmo tipo de informação;

alunos.push('Luísa', 'Eduardo');
console.log(typeof alunos);


// console.log(alunos.slice(0, 3));
// delete alunos[1]; para excluir algum aluno;
// const removido = alunos.shift(); shift() = remove o índice do começo;
// const removido = alunos.pop(); pop() = remove o índice do final;
// alunos.unshift('luísa');  Adiciona no começo do array;
// console.log(alunos[0]);  array são indexados por elemento, iniciando do 0;
// alunos[0] = 'Eduardo'  Forma de editar um array;
// alunos[alunos.length] = 'Luzia'  Caso não tenha um índice, ele será criado;
// console.log(alunos.length);  length serve para saber o tamanho;
// alunos.push('Otávio');  Caso não tenha um índice, ele será adicionado no fim;