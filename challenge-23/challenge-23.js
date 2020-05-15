/*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:

- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente;
- O input deve iniciar com valor zero;
- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷);
- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0;

- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real;
- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado.
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x".
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado.
*/

(function(document, window){

  var $inputCalculator = document.querySelector("[data-js=calculator]");
  var $btNumber = document.querySelectorAll("[data-js=btNumber]");
  var $btOp = document.querySelectorAll('[data-js="btOp"]');
  var $equal = document.querySelector('[data-js="equal"]');
  var $reset = document.querySelector('[data-js="reset"]');


  $btNumber.forEach(function(item) {
    item.addEventListener("click", clickNumber, false);
  });

  function clickNumber() {
    if ($inputCalculator.value == 0) {
      $inputCalculator.value = this.value;
    } else {
      $inputCalculator.value += this.value;
    }
  }

  $btOp.forEach(function(item) {
    item.addEventListener("click", clickOperation, false);
  });

  function clickOperation() {
    if (!!lastItemIsAnOperator()) {
      $inputCalculator.value = removeOperator($inputCalculator.value);
    }
    $inputCalculator.value += this.value;
  }

  $reset.addEventListener("click", clickReset, false);

  function clickReset() {
    $inputCalculator.value = 0;
  }

  $equal.addEventListener("click", clickEqual, false);

  function clickEqual() {
    var regexp = /(\d+)[+\-x÷/]?/g;
    var operationRegex = /[+\-x÷]/g;
    var numberRegex = /(\d+)/g;
    var values = $inputCalculator.value.match(regexp);

    console.log('Values: ', values);
    console.log('Tamanho Values: ', values.length);
    var lastItem = values[values.length - 1];

    console.log('Match: ', !!lastItem.match(operationRegex));

    if (!!lastItem.match(operationRegex)){
      values[values.length - 1] = removeOperator(lastItem);
    }

    $inputCalculator.value = values.reduce(function(previous, actual) {

      var firstOperator = previous.match(operationRegex)[0];
      var lastOperator = !!actual.match(operationRegex) ? actual.match(operationRegex)[0] : "";
      var firstNumber = previous.match(numberRegex);
      var secondNumber = actual.match(numberRegex);

      switch (firstOperator) {
        case "+":
          return (Number(firstNumber) + Number(secondNumber)) + lastOperator;
        case "-":
          return (Number(firstNumber) - Number(secondNumber)) + lastOperator;
        case "x":
					return (Number(firstNumber) * Number(secondNumber)) + lastOperator;
				case "÷":
          return (Number(firstNumber) / Number(secondNumber)) + lastOperator;
      }
    });
  }

  function removeOperator(string) {
    return string.slice(0, string.length - 1);
  }

  function lastItemIsAnOperator() {
    var lastItem = $inputCalculator.value.substring(
      $inputCalculator.value.length - 1,
      $inputCalculator.value.length
    );
    var regex = /\D/gim;
    return !!lastItem.match(regex);
  }

})(document, window);
