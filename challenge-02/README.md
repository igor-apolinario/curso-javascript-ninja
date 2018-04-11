# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(number1, number2) {
	return number1 + number2;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var resultado = (soma(10,5) + 5);

// Qual o valor atualizado dessa variável?
20

// Declare uma nova variável, sem valor.
var teste;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function adicionarValor() {
	teste = 'VALOR';
	return teste;
}

// Invoque a função criada acima.
adicionarValor();

// Qual o retorno da função? (Use comentários de bloco).
'VALOR'

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function multiplicarNumeros(valor1, valor2, valor3) {
	var preencherValores = 'Preencha todos os valores corretamente!';
	if (valor1 === undefined || valor2 === undefined || valor3 === undefined) {
		return preencherValores;
	} else {
		return (valor1 * valor2 * valor3) + 2;
	}
}

// Invoque a função criada acima, passando só dois números como argumento.
multiplicarNumeros(5,5);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
/* 
 O resultado recebido foi:
 'Preencha todos os valores corretamente!' */

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
multiplicarNumeros(5,5,5);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
/* O resultado retornado foi 127, ou seja, 5 * 5 * 5 + 2. */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function testarCaracteres (parametro1, parametro2, parametro3) {
  if (parametro1 || parametro2 || parametro3) {
    if (parametro1 && parametro2 && parametro3) {
      return (parametro1 + parametro2) / parametro3;
    } else if (parametro1 && !parametro2 && !parametro3) {
      return parametro1;
    } else if (!parametro1 && parametro2 && !parametro3) {
      return parametro2;
    } else if (!parametro1 && !parametro2 && parametro3) {
      return parametro3;
    } else if (parametro1 && parametro2 && !parametro3) {
      return parametro1 + parametro2;
    } else if (!parametro1 && parametro2 && parametro3) {
      return parametro2 + parametro3;
    } else if (parametro1 && !parametro2 && parametro3) {
      return parametro1 + parametro3;
    } else {
      return null;
    }
	} else {
		return false;
	}
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
testarCaracteres(); // false
testarCaracteres(1); // 1
testarCaracteres(5,5); // 10
testarCaracteres(1,1,1); // 2
```
