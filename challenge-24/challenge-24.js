/*
Nossa calculadora agora está funcional! A ideia desse desafio é modularizar
o código, conforme vimos na aula anterior. Quebrar as responsabilidades
em funções, onde cada função faça somente uma única coisa, e faça bem feito.

- Remova as duplicações de código;
- agrupe os códigos que estão soltos em funções (declarações de variáveis,
listeners de eventos, etc);
- faça refactories para melhorar esse código, mas de forma que o mantenha com a
mesma funcionalidade.
*/

// Attributes;
var $visor = document.querySelector('[data-js="visor"]');
var $buttonsNumbers = document.querySelectorAll('[data-js="button-number"]');
var $buttonsOperations = document.querySelectorAll(
  '[data-js="button-operation"]'
);
var $buttonCE = document.querySelector('[data-js="button-ce"]');
var $buttonEqual = document.querySelector('[data-js="button-equal"]');

// Initializations
(function buttonEventsIntializer() {
  Array.prototype.forEach.call($buttonsNumbers, function(button) {
    handleClickEvent(button, handleClickNumber);
  });

  Array.prototype.forEach.call($buttonsOperations, function(button) {
    handleClickEvent(button, handleClickOperation);
  });

  handleClickEvent($buttonCE, handleClickCE);
  handleClickEvent($buttonEqual, handleClickEqual);
})();

// Methods
function handleClickEvent(context, callback) {
  context.addEventListener("click", callback, false);
}

function handleClickNumber() {
  $visor.value += this.value;
}

function handleClickOperation() {
  $visor.value = removeLastItemIfItIsAnOperator($visor.value);
  $visor.value += this.value;
}

function handleClickCE() {
  $visor.value = 0;
}

function isLastItemAnOperation(number) {
  var operations = ["+", "-", "x", "÷"];
  var lastItem = getLastCaracter(number);
  return operations.some(function(operator) {
    return operator === lastItem;
  });
}

function removeLastItemIfItIsAnOperator(number) {
  if (isLastItemAnOperation(number)) {
    return removeCaracter(number);
  }
  return number;
}

function handleClickEqual() {
  $visor.value = removeLastItemIfItIsAnOperator($visor.value);
  var allValues = $visor.value.match(/\d+[+x÷-]?/g);
  $visor.value = allValues.reduce(serieCalculation);
}

function serieCalculation(previous, actual) {
  var firstValue = removeCaracter(previous);
  var operator = getLastCaracter(previous);
  var lastValue = removeLastItemIfItIsAnOperator(actual);
  var lastOperator = isLastItemAnOperation(actual)
    ? getLastCaracter(actual)
    : "";
  return executeOperation(operator, firstValue, lastValue) + lastOperator;
}

function getLastCaracter(string) {
  return string.split("").pop();
}

function removeCaracter(string) {
  return string.slice(0, -1);
}

function sum(num1, num2) {
  return Number(num1) + Number(num2);
}

function sub(num1, num2) {
  return Number(num1) - Number(num2);
}

function mul(num1, num2) {
  return Number(num1) * Number(num2);
}

function div(num1, num2) {
  return Number(num1) / Number(num2);
}

function executeOperation(operator, num1, num2) {
  switch (operator) {
    case "+":
      return sum(num1, num2);
    case "-":
      return sub(num1, num2);
    case "x":
      return mul(num1, num2);
    case "÷":
      return div(num1, num2);
  }
}
