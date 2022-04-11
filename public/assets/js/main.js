'use strict';

console.log('>> Ready :)');

//CONSTANTES
const button = document.querySelector('.js__buttonSearch');
const list = document.querySelector('.js__list');

//VARIABLES
let cocktails = [];

//FUNCIONES
button.addEventListener('click', (event) => {
  fetchApi();
});

function fetchApi() {
  fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita') //aquí le pasamos la URL donde queremos hacer la petición
    .then((response) => response.json())
    .then((data) => {
      cocktails = data.drinks;
      console.log(cocktails);
      let searchValue = document.getElementById('search').value;

      search(searchValue, cocktails);
    });
}

//function to paint in HTML , I have to bring the list to js

function createlist() {
  for (const item of cocktails) {
    list.innerHTML += `
    <div>   
      <li> ${item.strDrink} </li>
      <img src = "${item.strDrinkThumb}" class="image"></img>
    </div>
    
    `;
  }
}

function search(term, cocktails) {
  for (let i = 0; i < cocktails.length; i++) {
    if (term == cocktails[i].strDrink) {
      console.log(term);
      console.log(cocktails[i].strDrink);
      list.innerHTML += `
        <div>   
          <li> ${cocktails[i].strDrink} </li>
          <img src = "${cocktails[i].strDrinkThumb}" class="image"></img>
        </div>
        `;
    }
  }
}

//# sourceMappingURL=main.js.map
