/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
championship = "Brasileiro";

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
teams = ["Palmeiras", "Santos", "Flamengo", "Internacional", "AtleticoMG"];

console.log("Times que estão participando do campeonato:", teams);

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
function showTeamPosition(posicao) {
  if (posicao > teams.length) {
    return console.log("Não temos a informação do time que está nessa posição.");
  } else {
    return console.log(`O time que está em ${posicao}º lugar é o ${teams[posicao - 1]}`);
  }
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
showTeamPosition(2);
showTeamPosition(1);
showTeamPosition(3);
showTeamPosition(6);
showTeamPosition(5);

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var x = 20;
while (x <= 30) {
  console.log(x);
  x++;
}

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
function convertToHex(color) {
  var hexadecimal;
  switch (color) {
    case "red":
      hexadecimal = "#FF0000";
      break;
    case "blue":
      hexadecimal = "#0000FF";
      break;
    case "green":
      hexadecimal = "#00FF00";
      break;
    case "yellow":
      hexadecimal = "#FFFF00";
      break;
    case "black":
      hexadecimal = "#000000";
      break;
    case "white":
      hexadecimal = "#FFFFFF";
      break;
    default:
      return `Não temos o equivalente hexadecimal para ${color}`;
      break;
  }
  return `O hexadecimal para a cor ${color} é ${hexadecimal}`;
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
console.log(convertToHex('red'));
console.log(convertToHex('black'));
console.log(convertToHex('purple'));
console.log(convertToHex('yellow'));
console.log(convertToHex('blue'));
console.log(convertToHex('green'));
console.log(convertToHex('white'));
console.log(convertToHex('orange'));

