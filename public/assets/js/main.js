'use strict';

console.log('>> Ready :)');

//CONSTANTES
const button = document.querySelector('.js__buttonSearch');
const list = document.querySelector('.js__list');

//FUNCIONES
button.addEventListener('click', (event) => {
  fetchApi();
});

function fetchApi() {
  fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita') //aquí le pasamos la URL donde queremos hacer la petición
    .then(function (response) {
      //esta es la promesa
      return response.json();
    })
    .then(function (data) {
      console.log(data.drinks);
    });
}

//function to paint in HTML , I have to bring the list to js

//# sourceMappingURL=main.js.map
