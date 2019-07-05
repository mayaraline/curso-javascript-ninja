/*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:

- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente; OK!
- O input deve iniciar com valor zero; OK!
- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número; OK!
- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷); OK!
- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0; OK!

- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real; OK!
- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado. OK!
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x".
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado. OK!
*/

(function(window, dom) {
  // Attributes
  var $inputDisplay = dom.querySelector("[data-js=inputDisplay]");
  var $buttons = dom.querySelectorAll("[data-js=buttonNumber]");
  var $operations = dom.querySelectorAll('[data-js="buttonOperation"]');
  var $equal = dom.querySelector('[data-js="buttonEqual"]');
  var $reset = dom.querySelector('[data-js="buttonReset"]');

  // Variable Initialization
  $inputDisplay.value = 0;

  // Events
  $buttons.forEach(function(item) {
    item.addEventListener("click", clickNumber, false);
  });

  $operations.forEach(function(item) {
    item.addEventListener("click", clickOperation, false);
  });

  $reset.addEventListener("click", clickReset, false);
  $equal.addEventListener("click", clickEqual, false);

  // Methods
  function clickNumber() {
    if ($inputDisplay.value == 0) {
      $inputDisplay.value = this.value;
    } else {
      $inputDisplay.value += this.value;
    }
  }

  function clickOperation() {
    if (!!lastItemIsAnOperator()) {
      $inputDisplay.value = removeOperator($inputDisplay.value);
    }
    $inputDisplay.value += this.value;
  }

  function clickReset() {
    $inputDisplay.value = 0;
  }

  function clickEqual() {
    var regexp = /(\d+)[+\-*\/]?/g;
    var operationRegex = /[+\-*\/]/g;
    var numberRegex = /(\d+)/g;
    var values = $inputDisplay.value.match(regexp);

    console.log('Values: ', values);
    console.log('Tamanho Values: ', values.length);
    var lastItem = values[values.length - 1];

    console.log('Match: ', !!lastItem.match(operationRegex));

    if (!!lastItem.match(operationRegex)){
      values[values.length - 1] = removeOperator(lastItem);
    }

    $inputDisplay.value = values.reduce(function(previous, actual) {

      var firstOperator = previous.match(operationRegex)[0];
      var lastOperator = !!actual.match(operationRegex) ? actual.match(operationRegex)[0] : "";
      var firstNumber = previous.match(numberRegex);
      var secondNumber = actual.match(numberRegex);

      switch (firstOperator) {
        case "+":
          return (Number(firstNumber) + Number(secondNumber)) + lastOperator;
        case "-":
          return (Number(firstNumber) - Number(secondNumber)) + lastOperator;
        case "*":
					return (Number(firstNumber) * Number(secondNumber)) + lastOperator;
				case "/":
          return (Number(firstNumber) / Number(secondNumber)) + lastOperator;
      }
    });
  }

  function removeOperator(string) {
    return string.slice(0, string.length - 1);
  }

  function lastItemIsAnOperator() {
    var lastItem = $inputDisplay.value.substring(
      $inputDisplay.value.length - 1,
      $inputDisplay.value.length
    );
    var regex = /\D/gim;
    return !!lastItem.match(regex);
  }
})(window, document);
