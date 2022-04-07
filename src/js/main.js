'use strict';

console.log('>> Ready :)');

const button = document.querySelector('js__buttonSearch');
const button = document.querySelector('alert');
button.addEventListener('click', (event) => {
  console.log('event'); //código a ejecutar
});

fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita') //aquí le pasamos la URL donde queremos hacer la petición
  .then(function (response) {
    //esta es la promesa
    return response.json();
  })
  .then(function (data) {
    document.body.innerHTML = data.result;
  });
