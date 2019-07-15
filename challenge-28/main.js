(function(doc, win) {
    var $inputCep = doc.querySelector("[data-js=inputCep]");
    var $logradouro = doc.querySelector("[data-js=logradouro]");
    var $bairro = doc.querySelector("[data-js=bairro]");
    var $estado = doc.querySelector("[data-js=estado]");
    var $cidade = doc.querySelector("[data-js=cidade]");
    var $cep = doc.querySelector("[data-js=cep]");
    var $buttonSubmit = doc.querySelector("[data-js=buttonSubmit]").addEventListener('click', handleClickEnviar, false);
    var $status = doc.querySelector("[data-js=status]");

    function handleClickEnviar() {
        var cep = extractRawCep($inputCep.value);
        var urlWithCep = urlBuilder(cep);
        getCepData(urlWithCep, cep);
    };

    function extractRawCep(cep) {
        var regex = /\D/g;
        return cep.replace(regex, '');
    };

    function urlBuilder(cep) {
        var url = "https://viacep.com.br/ws/[CEP]/json/";
        return url.replace('[CEP]', cep);
    }

    function getCepData(url, cep) {
        var ajax = new XMLHttpRequest();
        var response;
        ajax.open('GET', url);
        ajax.send();

        ajax.addEventListener('readystatechange', function() {
            if (ajax.readyState === 3 && ajax.status === 200) {
                setStatus(3, cep);
            }
            if (ajax.readyState === 4 && ajax.status === 200) {
                setStatus(1, cep);
                responseParseJson(ajax.responseText);
            }
            if (ajax.status >=400) {
                setStatus(2, cep);
            }
        }, false);
    };

    function setStatus(status, cep) {
        switch(status) {
            case 1:
                $status.textContent = 'Endereço referente ao CEP [' + cep + ']: ';
                break;
            
            case 2:
                $status.textContent = 'Não encontramos o endereço para o CEP [' + cep + '].';
                break;
            
            case 3:
                $status.textContent = 'Buscando informações para o CEP[' + cep + ']...';
                break;

            default: 
                $status.textContent = 'Indefinido';
        }
    }

    function responseParseJson(response) {
        var response = JSON.parse(response);
        setFormFields(response);
    }

    function setFormFields(response) {
        if (!response.erro){
            $logradouro.value = response.logradouro;
            $bairro.value = response.bairro;
            $estado.value = response.uf;
            $cidade.value = response.localidade;
            $cep.value = response.cep;
        } else {
            setStatus(2, response.cep);
        }
    }
})(document, window);