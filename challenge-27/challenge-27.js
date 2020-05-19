/*
Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
métodos semelhantes aos que existem no array, mas que sirvam para os
elementos do DOM selecionados.
Crie os seguintes métodos:
- forEach, map, filter, reduce, reduceRight, every e some.

Crie também métodos que verificam o tipo do objeto passado por parâmetro.
Esses métodos não precisam depender de criar um novo elmento do DOM, podem
ser métodos estáticos.

Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
no objeto, como nos exemplos abaixo:
DOM.isArray([1, 2, 3]); // true
DOM.isFunction(function() {}); // true
DOM.isNumber('numero'); // false

Crie os seguintes métodos para verificação de tipo:
- isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
O método isNull deve retornar `true` se o valor for null ou undefined.
*/


(function(document, window){

  'use strict';

  function DOM (elements){
    this.element = document.querySelectorAll(elements);
  }

  DOM.prototype.on = function on(event, callback){
    Array.prototype.forEach.call(this.element, function(element){
      element.addEventListener(event, callback);
    });
  };

  DOM.prototype.off = function of(event, callback){
    Array.prototype.forEach.call(this.element, function(element){
      element.removeEventListener(event, callback);
    });
  };

DOM.prototype.get = function get(){
return this.element;
};

//metodos

DOM.prototype.forEach = function forEach(callback){
  Array.prototype.forEach.call(event, callback);
}

DOM.prototype.map = function map(callback){
  Array.prototype.map.call(event, callback);
}

DOM.prototype.filter = function filter(callback){
  Array.prototype.filter.call(event, callback);
}

DOM.prototype.reduce = function reduce(callback){
  Array.prototype.reduce.call(event, callback);
}

DOM.prototype.reduceRight = function reduceRight(callback){
  Array.prototype.reduceRight.call(event, callback);
}

DOM.prototype.every = function every(callback){
  Array.prototype.every.call(event, callback);
}

DOM.prototype.some = function some(callback){
  Array.prototype.some.call(event, callback);
}

//

//verificação

DOM.isArray = function isArray(object){
  return Object.prototype.toString.call(object) === "[object Array]";
}
var array = [1, 2, 3];
console.log('Is an array? ' +DOM.isArray(array));

DOM.isObject = function isObject(object){
  return Object.prototype.toString.call(object) === "[object Object]";
}
var obj = {'name': 'Mayara', 'age': 17};
console.log('Is an object? ' +DOM.isObject(obj));

DOM.isFunction = function isFunction(func){
  return Object.prototype.toString.call(func) === "[object Function]";
}
var func = function(){};
console.log('Is a function? ' +DOM.isFunction(func));

DOM.isNumber = function isNumber(number){
  return Object.prototype.toString.call(number) === "[object Number]";
}
var number = 7;
console.log('Is a number? ' +DOM.isNumber(number));

DOM.isString = function isString(string){
  return Object.prototype.toString.call(string) === "[object String]";
}
var string = 'HelloWorld';
console.log('Is a string? ' +DOM.isString(string));

DOM.isBoolean = function isBoolean(bool){
  return Object.prototype.toString.call(bool) === "[object Boolean]";
}
var bool = false;
console.log('Is a boolean? ' +DOM.isBoolean(bool));

DOM.isNull = function isNull(n){
  return Object.prototype.toString.call(n) === "[object Null]";
}
var n = null;
console.log('Is null? ' +DOM.isNull(n));

var $a = new DOM('[data-js="link"]');
$a.on('click', function handleClick(e) {
  e.preventDefault();
  console.log('clicou');
  $a.off('click', handleClick)
});

console.log('Elementos selecionados:', $a.get());
console.log('$a é filho de body?', $a.get()[0].parentNode === document.body);


})(document, window);
