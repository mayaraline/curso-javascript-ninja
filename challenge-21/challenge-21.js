/*
O desafio de hoje será um pequeno projeto: um cronômetro!
As regras para criação do cronômetro são as seguintes:
1. Crie um arquivo index.html e adicione esse script a ele; OK!
2. Crie um campo `input` do tipo `text`, e inicie-o com um valor 0 (zero).
Ele será o nosso cronômetro; OK!
3. Crie 3 botões para as ações do cronômetro: Start, Stop e Reset; OK!
4. Ao clicar em Start, o valor do campo deve ser incrementado de 1 em 1, a
cada segundo;
5. Ao clicar em Stop, o cronômetro deve parar de contar;
6. Ao clicar em Reset, o cronômetro deve zerar e parar de contar.

Utilize o atributo data-js para nomear o campo e os botões. Você pode
usar o nome que achar melhor, desde que ele seja semântico, ou seja, o nome
dado ao elemento HTML deve definir o que o elemento é ou o que ele faz.
*/
(function(document, window){
    
    var $inputCronometro = document.querySelector('[data-js=cronometro]');
    var $buttonStart  = document.querySelector('[data-js=start]');
    var $buttonStop  = document.querySelector('[data-js=stop]');
    var $buttonReset  = document.querySelector('[data-js=reset]');
    var cronometro;
    $inputCronometro.value = 0;

    function timer() {
        $inputCronometro.value++;
        cronometro = setTimeout(timer, 1000);
    }

    $buttonStart.addEventListener('click', function() {
        timer();
    }, false);

    $buttonStop.addEventListener('click', function() {
        clearTimeout(cronometro);
    }, false);

    $buttonReset.addEventListener('click', function() {
        $inputCronometro.value = 0;
    }, false);

    
})(document, window);