  /*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."

  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
  */

(function(document, window){

    'use strict';

    //variaveis
    var $inputCep = document.querySelector("[data-js=inputCep]");
    var $logradouro = document.querySelector("[data-js=logradouro]");
    var $bairro = document.querySelector("[data-js=bairro]");
    var $estado = document.querySelector("[data-js=estado]");
    var $cidade = document.querySelector("[data-js=cidade]");
    var $submit = document.querySelector("[data-js=submit]");
    var $cep = document.querySelector("[data-js=cep]");


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
    Array.prototype.forEach.apply(event, callback);
  }

  DOM.prototype.map = function map(callback){
    Array.prototype.map.apply(event, callback);
  }

  DOM.prototype.filter = function filter(callback){
    Array.prototype.filter.apply(event, callback);
  }

  DOM.prototype.reduce = function reduce(callback){
    Array.prototype.reduce.apply(event, callback);
  }

  DOM.prototype.reduceRight = function reduceRight(callback){
    Array.prototype.reduceRight.apply(event, callback);
  }

  DOM.prototype.every = function every(callback){
    Array.prototype.every.apply(event, callback);
  }

  DOM.prototype.some = function some(callback){
    Array.prototype.some.apply(event, callback);
  }

  //verificação

  DOM.isArray = function isArray(object){
    return Object.prototype.toString.call(object) === "[object Array]";
  }

  DOM.isObject = function isObject(object){
    return Object.prototype.toString.call(object) === "[object Object]";
  }

  DOM.isFunction = function isFunction(func){
    return Object.prototype.toString.call(func) === "[object Function]";
  }

  DOM.isNumber = function isNumber(number){
    return Object.prototype.toString.call(number) === "[object Number]";
  }

  DOM.isString = function isString(string){
    return Object.prototype.toString.call(string) === "[object String]";
  }

  DOM.isBoolean = function isBoolean(bool){
    return Object.prototype.toString.call(bool) === "[object Boolean]";
  }

  DOM.isNull = function isNull(n){
    return Object.prototype.toString.call(n) === "[object Null]";
  }

var $a = new DOM('[data-js="link"]');
$a.on('click', function handleClick(e) {
  e.preventDefault();
  console.log('clicou');
  $a.off('click', handleClick)
});

  var $form = new DOM("[data-js='form']");
  var $inputCEP = new DOM ("[data-js = 'inputCep']");
  var ajax = new XMLHttpRequest();
  $form.on('submit', handleSubmitFormCEP);

  function handleSubmitFormCEP(event){
    event.preventDefault();
    console.log($inputCEP.get()[0].value)
    var url = getUrl;
    ajax.open('GET', url);
    ajax.send();
    getMessage('loading');
    ajax.addEventListener('readystatechange', handleReadyStateChange);
  }

  function getUrl(){
    return 'https://viacep.com.br/ws/[CEP]/json/'.replace('[CEP]', $inputCEP.get()[0].value.replace(/\D/g), '');
  }

  function handleReadyStateChange(){
    if(isRequestOk()){
      fillCEPFields();
    }
    console.log('Carregando...');
  }

  function isRequestOk(){
    return ajax.readyState === 4 && ajax.status === 200;
  }

  function fillCEPFields(){
    var data = parseData();
    if(!data)
    return console.log('DATA ERROR', data);
    console.log('DATA');
    var $logradouro = new DOM('[data-js= "logradouro"]');
    var $bairro = new DOM('[data-js= "bairro"]');
    var $estado = new DOM('[data-js= "estado"]');
    var $cidade = new DOM('[data-js= "cidade"]');
    var $cep = new DOM('[data-js= "cep"]');
    $logradouro.get()[0].textContent = data.$logradouro;
    $bairro.get()[0].textContent = data.$bairro;
    $estado.get()[0].textContent = data.$estado;
    $cidade.get()[0].textContent = data.$cidade;
    $cep.get()[0].textContent = data.$cep;
  }

  function parseData(){
    var result = null;
    try{
      result = JSON.parse(ajax.responseText);
    }catch(e){
      result = null;
    }return result;
  }


  function getMessage(type){
    var messages = {
      loading: 'Buscando informações para o CEP',
      ok: 'Endereço referente ao CEP',
      error: 'Não encontramos o endereço para o CEP'
    };
    return messages[type];
  }
})(document, window);
