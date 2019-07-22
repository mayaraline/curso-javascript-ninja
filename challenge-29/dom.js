(function() {
    "use strict";
  
    DOM.is = function is(obj) {
      return Object.prototype.toString.call(obj);
    };
  
    DOM.isArray = function isArray(obj) {
      return this.is(obj) === "[object Array]";
    };
  
    DOM.isFunction = function isFunction(obj) {
      return this.is(obj) === "[object Function]";
    };
  
    DOM.isObject = function isObject(obj) {
      return this.is(obj) === "[object Object]";
    };
  
    DOM.isNumber = function isNumber(obj) {
      return this.is(obj) === "[object Number]";
    };
  
    DOM.isBoolean = function isBoolean(obj) {
      return this.is(obj) === "[object Boolean]";
    };
  
    DOM.isString = function isString(obj) {
      return this.is(obj) === "[object String]";
    };
  
    DOM.isNull = function isNull(obj) {
      return (
        this.is(obj) === "[object Null]" || this.is(obj) === "[object Undefined]"
      );
    };
  
    function DOM(elements) {
      this.element = document.querySelectorAll(elements);
    }
  
    DOM.prototype.on = function on(event, callback) {
      Array.prototype.forEach.call(this.element, function(element) {
        element.addEventListener(event, callback, false);
      });
    };
  
    DOM.prototype.off = function off(event, callback) {
      Array.prototype.forEach.call(this.element, function(element) {
        element.removeEventListener(event, callback, false);
      });
    };
  
    DOM.prototype.get = function get() {
      return this.element;
    };
  
    DOM.prototype.forEach = function forEach() {
      Array.prototype.forEach.apply(this.element, arguments);
    };
  
    DOM.prototype.map = function map() {
      Array.prototype.map.apply(this.element, arguments);
    };
  
    DOM.prototype.filter = function filter() {
      Array.prototype.filter.apply(this.element, arguments);
    };
  
    DOM.prototype.reduce = function reduce() {
      Array.prototype.reduce.apply(this.element, arguments);
    };
  
    DOM.prototype.reduceRight = function reduceRight() {
      Array.prototype.reduceRight.apply(this.element, arguments);
    };
  
    DOM.prototype.every = function every() {
      Array.prototype.every.apply(this.element, arguments);
    };
  
    DOM.prototype.some = function some() {
      Array.prototype.some.apply(this.element, arguments);
    };
  
    window.DOM = DOM;
  })();
  