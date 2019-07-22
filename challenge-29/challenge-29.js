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
    - Imagem do carro (deverá aceitar uma URL) OK!
    - Marca / Modelo OK!
    - Ano OK!
    - Placa OK!
    - Cor OK!
    - e um botão "Cadastrar" OK!

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

    var url_base = './company.json';
    var inputs = [];

    // Header
    var $companyName = document.querySelector('[data-js="company-name"]');
    var $companyPhone = document.querySelector('[data-js="company-phone"]');

    // Inputs
    var $inputImagem = document.querySelector('[data-js="input-url-image"]');
    var $inputMarcaModelo = document.querySelector('[data-js="input-marca-modelo"]');
    var $inputAno = document.querySelector('[data-js="input-ano"]');
    var $inputPlaca = document.querySelector('[data-js="input-placa"]');
    var $inputCor = document.querySelector('[data-js="input-cor"]');

    // Button
    var $btnCadastrar = document.querySelector('[data-js="btn-cadastrar"]');

    // Table
    var $carTable = document.querySelector('[data-js="car-table"]');

    function getCompanyData() {
      var method = 'GET';
      var ajax = createAjaxRequest(method, url_base);

      ajax.addEventListener('readystatechange', function() {
        if (hasRequestSuccessful(ajax)) {
          var data = JSON.parse(ajax.responseText);
          $companyName.textContent = data.name;
          $companyPhone.textContent = data.phone;
        }
      });
    }

    function createAjaxRequest(method, url) {
      var ajax = new XMLHttpRequest();
      ajax.open(method, url);
      ajax.send();

      return ajax;
    }

    function hasRequestSuccessful(ajaxRequest) {
      return ajaxRequest.status === 200 && ajaxRequest.readyState === 4;
    }

    function createTableData(dataValue, tableRow) {
      var newTableData = document.createElement('td');
      newTableData.textContent = dataValue;
      tableRow.appendChild(newTableData);
    }

    function handleClickCadastrar() {
      $btnCadastrar.addEventListener('click', () => {
        event.preventDefault();

        // Criar linha de Dados para colocar  na tabela
        var $newTableRow = document.createElement('tr');

        // Criar campos de dados e obter dados dos inputs
        createTableData($inputImagem.value, $newTableRow);
        createTableData($inputMarcaModelo.value, $newTableRow);
        createTableData($inputAno.value, $newTableRow);
        createTableData($inputPlaca.value, $newTableRow);
        createTableData($inputCor.value, $newTableRow);

        // Adicionar na table a linha nova
        $carTable.appendChild($newTableRow);
      }, false);
    }

    return (
      getCompanyData(),
      handleClickCadastrar()
    )
  }

  window.app = app;

})();
window.app();