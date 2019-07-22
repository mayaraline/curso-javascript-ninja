(function() {
  'use strict';

  /*
  Vamos estruturar um pequeno app utilizando módulos.
  Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
  A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
  seguinte forma:
  - No início do arquivo, deverá ter as informações da sua empresa - nome e
  telefone (já vamos ver como isso vai ser feito) OK!
  - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
  um formulário para cadastro do carro, com os seguintes campos:
    - Imagem do carro (deverá aceitar uma URL)
    - Marca / Modelo
    - Ano
    - Placa
    - Cor
    - e um botão "Cadastrar"

  Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
  carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
  aparecer no final da tabela.

  Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
  empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
  Dê um nome para a empresa e um telefone fictício, preechendo essas informações
  no arquivo company.json que já está criado.

  Essas informações devem ser adicionadas no HTML via Ajax.

  Parte técnica:
  Separe o nosso módulo de DOM criado nas últimas aulas em
  um arquivo DOM.js.

  E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
  que será nomeado de "app".
  */

  function app() {

    var $companyName = document.querySelector('[data-js="company-name"]');
    var $companyPhone = document.querySelector('[data-js="company-phone"]');
    var url_base = './company.json';

    // Inputs
    var $inputImagem = document.querySelector('[data-js="input-url-image"]');
    var $inputMarcaModelo = document.querySelector('[data-js="input-marca-modelo"]');
    var $inputAno = document.querySelector('[data-js="input-ano"]');
    var $inputPlaca = document.querySelector('[data-js="input-placa"]');
    var $inputCor = document.querySelector('[data-js="input-cor"]');

    // Button
    var $btnCadastrar = document.querySelector('[data-js="btn-cadastrar"]');

    function getCompanyData() {
      var ajax = new XMLHttpRequest();
      ajax.open('GET', url_base);
      ajax.send();

      ajax.addEventListener('readystatechange', function() {
        if (ajax.status === 200 && ajax.readyState === 4) {
          var data = JSON.parse(ajax.responseText);
          $companyName.textContent = data.name;
          $companyPhone.textContent = data.phone;
        }
      });
    }

    return (
      console.log($companyName),
      console.log($companyPhone),
      getCompanyData()
    )
  }

  window.app = app;

})();
window.app();