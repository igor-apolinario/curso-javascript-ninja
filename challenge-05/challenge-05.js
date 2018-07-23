/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
const myVar = ['teste1', null, undefined, 0, 'teste2'];

// Impressão de resultado abaixo
console.log(myVar);

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
myFunction = argArray => {
	return argArray;
}

// Impressão de resultado abaixo
console.log(myFunction(myVar));

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunction(myVar)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
myFunction2 = (argArray, argNumber) => {
	return argArray[argNumber];
}

console.log(myFunction2(myVar, 0));

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
const myVar2 = ['String 1', null, undefined, 0, NaN];

console.log(myVar2);

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myFunction2(myVar2));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
book = nameBook => {
	const books = {
		"A Guerra dos Tronos": {
			quantidadePaginas: 526,
			autor: 'Igor Apólinário',
			editora: 'Publica que vai'
		},
		"Os Vingadores": {
			quantidadePaginas: 210,
			autor: 'Rafael Carvalho',
			editora: 'Publica que foi'
		},
		"Homem de Ferro": {
			quantidadePaginas: 324,
			autor: 'Yudi Pedrico',
			editora: 'Não publica, não'
		}
	};

	return nameBook ? books[nameBook] : books; 
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());


/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log(`O livro "A Guerra dos Tronos" tem ${book("A Guerra dos Tronos").quantidadePaginas} páginas!`);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro "Os Vingadores" é ${book("Os Vingadores").autor}.`);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro "O Homem de Ferro" foi publicado pela editoria ${book("Homem de Ferro").editora}.`);

