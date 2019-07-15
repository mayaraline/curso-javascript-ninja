  /*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit; Ok!
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS. Ok!
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro." Ok!

  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo; Ok!
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML; Ok!
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos. Ok!
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..." Ok!
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]." Ok!
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:" Ok!
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela. 
  */
