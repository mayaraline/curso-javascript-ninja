/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var array = [1, 4, 6, 21, 41];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function funcArray(arg) {
  return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
funcArray(array)[1];
// 4

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function funcArray2(array, arg) {
  return array[arg];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var array2 = [1, "Eduardo", null, undefined, true];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
funcArray2(array2, 0);
funcArray2(array2, 1);
funcArray2(array2, 2);
funcArray2(array2, 3);
funcArray2(array2, 4);

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
function book(titulo) {
  var boxGot = {
    "Guerra dos Tronos": {
      quantidadePaginas: 592,
      autor: "George R. R. Martin",
      editora: 'Leya'
    },
    "A Furia dos Reis": {
      quantidadePaginas: 656,
      autor: "George R. R. Martin",
      editora: 'Leya'
    },
    "A Tormenta de Espadas": {
      quantidadePaginas: 848,
      autor: "George R. R. Martin",
      editora: 'Leya'
    }
  };

  return !!boxGot[titulo] ? boxGot[titulo] : boxGot;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book('Festim dos Corvos');

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
`O livro Guerra dos Tronos tem ${book('Guerra dos Tronos').quantidadePaginas} paginas!`

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
`O autor do livro Guerra dos Tronos é ${book('Guerra dos Tronos').autor}`

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
`O livro Guerra dos Tronos foi publicado pela editora ${book('Guerra dos Tronos').editora}`
