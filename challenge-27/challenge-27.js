/*
Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
métodos semelhantes aos que existem no array, mas que sirvam para os
elementos do DOM selecionados.
Crie os seguintes métodos:
- forEach, map, filter, reduce, reduceRight, every e some. OK!

Crie também métodos que verificam o tipo do objeto passado por parâmetro.
Esses métodos não precisam depender de criar um novo elmento do DOM, podem
ser métodos estáticos.

Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
no objeto, como nos exemplos abaixo:
DOM.isArray([1, 2, 3]); // true
DOM.isFunction(function() {}); // true
DOM.isNumber('numero'); // false

Crie os seguintes métodos para verificação de tipo:
- isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull. OK!

O método isNull deve retornar `true` se o valor for null ou undefined. OK!
*/

(function(document, window) {
  "use strict";

  function DOM(elements) {
    this.element = document.querySelectorAll(elements);
  }

  DOM.isArray = function isArray(object) {
    return Object.prototype.toString.call(object) === "[object Array]";
  };

  DOM.isObject = function isObject(object) {
    return Object.prototype.toString.call(object) === "[object Object]";
  };

  DOM.isFunction = function isFunction(object) {
    return Object.prototype.toString.call(object) === "[object Function]";
  };

  DOM.isNumber = function isNumber(object) {
    return Object.prototype.toString.call(object) === "[object Number]";
  };

  DOM.isString = function isString(object) {
    return Object.prototype.toString.call(object) === "[object String]";
  };

  DOM.isBoolean = function isBoolean(object) {
    return Object.prototype.toString.call(object) === "[object Boolean]";
  };

  DOM.isNull = function isNull(object) {
    return Object.prototype.toString.call(object) === "[object Null]" || Object.prototype.toString.call(object) === "[object Undefined]";
  };

  DOM.prototype.on = function on(event, callback) {
    Array.prototype.forEach.call(this.element, function(element) {
      element.addEventListener(event, callback);
    });
  };

  DOM.prototype.off = function off(event, callback) {
    Array.prototype.forEach.call(this.element, function(element) {
      element.removeEventListener(event, callback);
    });
  };

  DOM.prototype.get = function get() {
    return this.element;
  };

  DOM.prototype.forEach = function forEach(callback) {
    Array.prototype.forEach.call(this.element, callback);
  };

  DOM.prototype.map = function map(callback) {
    Array.prototype.map.call(this.element, callback);
  };

  DOM.prototype.filter = function filter(callback) {
    Array.prototype.filter.call(this.element, callback);
  };

  DOM.prototype.reduce = function reduce(callback) {
    Array.prototype.reduce.call(this.element, callback);
  };

  DOM.prototype.reduceRight = function reduceRight(callback) {
    Array.prototype.reduceRight.call(this.element, callback);
  };

  DOM.prototype.every = function every(callback) {
    Array.prototype.every.call(this.element, callback);
  };

    DOM.prototype.some = function some(callback) {
    Array.prototype.some.call(this.element, callback);
  };


  var $a = new DOM('[data-js="link"]');
  $a.on("click", function(e) {
    e.preventDefault();
    console.log("clicou");
  });

  // Tests
  var arr = [1, 2, 5];
  var obj = { "id": 1, "key": "prop1" };
  var func = function() { return false};
  var str = 'Text';
  var num = 1;
  var bool = false;
  var nul = null;
  var und = undefined;

  console.log("Elementos selecionados:", $a.get());
  console.log("$a é filho de body?", $a.get()[0].parentNode === document.body);

  console.log('arr is an array? ', DOM.isArray(arr));
  console.log('obj is an object? ', DOM.isObject(obj));
  console.log('func is a function? ', DOM.isFunction(func));
  console.log('str is a string?', DOM.isString(str));
  console.log('num is a number?', DOM.isNumber(num));
  console.log('bool is a boolean?', DOM.isBoolean(bool));
  console.log('nul is null?', DOM.isNull(nul));
  console.log('nul is undefined?', DOM.isNull(und));


})(document, window);
