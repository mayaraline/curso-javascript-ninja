(function(DOM) {
  "use strict";

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
    var url_base = "./company.json";

    // Header
    var $companyName = DOM('[data-js="company-name"]').get();
    var $companyPhone = DOM('[data-js="company-phone"]').get();

    // Inputs
    var inputs = [];
    inputs = DOM('input');

    // Button
    var $btnCadastrar = DOM('[data-js="btn-cadastrar"]').on(
      "click",
      handleClickCadastrar,
      false
    );

    // Table
    var $carTable = DOM('[data-js="car-table"]').get();

    function getCompanyData() {
      var method = "GET";
      var ajax = createAjaxRequest(method, url_base);

      ajax.addEventListener("readystatechange", setCompanyData, false);
    }

    function setCompanyData() {
      if (hasRequestSuccessful(this)) {
        var data = JSON.parse(this.responseText);
        $companyName.textContent = data.name;
        $companyPhone.textContent = data.phone;
      }
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
      var newTableData = document.createElement("td");
      newTableData.textContent = dataValue;
      tableRow.appendChild(newTableData);
    }

    function handleClickCadastrar() {
      event.preventDefault();

      // Criar linha de Dados para colocar  na tabela
      var $newTableRow = document.createElement("tr");

      // Criar campos de dados e obter dados dos inputs
      inputs.forEach(function(input) {
        createTableData(input.value, $newTableRow);
      });

      // Adicionar na table a linha nova
      $carTable.appendChild($newTableRow);
    }

    return getCompanyData();
  }

  window.app = app;
})(window.DOM);
window.app();
