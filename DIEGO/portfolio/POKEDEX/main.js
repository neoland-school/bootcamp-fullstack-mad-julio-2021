// Ejercicio 1: Recuperar la información de pikachu del API de pokemon y mostrar en la web su imagen frontal y su nombre

/**
 * ---------------------------INICIO PIKACHU ----------------------------------
 */
// let pikachu = {};

// fetch('https://pokeapi.co/api/v2/pokemon/pikachu').then(function (result) {

//     return result.json();

// }).then(data => {
//     pikachu = data

//     setPikachuNameOnDOM();
//     setPikachuImgOnDOM();

// });

// function setPikachuNameOnDOM() {
//     const p = document.createElement('p');
//     p.textContent = pikachu.name;
//     document.body.appendChild(p);
// }
// function setPikachuImgOnDOM() {
//     const p = document.createElement('img');
//     p.src = pikachu.sprites.front_default;
//     document.body.appendChild(p);
// }
/**
 * ---------------------------FIN PIKACHU ----------------------------------
 */

// Ejercicio 2: Construcción de la aplicación de POKEDEX:
// Vamos a construir una aplicación para mostrar una pokedex (ver imagen de ejemplo de diseño). La pokedex:
// - Mostrará el listado con los primeros 150 pokemons en orden. Para cada pokemon se mostrará:
//       * Imagen frontal del pokemon
//       * Nombre del pokemon
//       * Tipo del pokemon
// - Se añadirá un buscador que cuando el usuario vaya escribiendo el nombre, en la lista solo aparecerán los que contengan el texto buscado en su nombre.
// - (NO ES TRIVIAL) Al hacer click en un pokemon desaparecerá el listado y se mostrará información detallada de ese pokemon (Elegir algunos datos como el ataque)
// Para obtener los datos utilizaremos el API de https://pokeapi.co/. En concreto necesitaremos obtener datos de las siguientes URL's:
// - https://pokeapi.co/api/v2/pokemon?limit=150 => devuelve el listado de los 150 primeros pokemon con su nombre y la URL del API que contiene su información.
// - Con la URL de cada pokemon obtendremos la información detallada de ese pokemon. Tendremos que utilizar esa URL para obtener esos datos para la pokedex

//------------FUNCION PARA PONER EN MAYUSCULA LA PRIMERA LETRA------------------

String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
// ------------------------------------------------------------------------------


function createPokemonCard(imgUrl, name, number, type, abilities/*, location*/) {

    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card__container');

    const imgHolder = document.createElement('img');
    imgHolder.classList.add('img__block');
    imgHolder.src = imgUrl;

    const nameHolder = document.createElement('p');
    nameHolder.classList.add('text__block');
    nameHolder.name = 'pokemonNameOnDOM';
    nameHolder.textContent = name.capitalize();

    const numberHolder = document.createElement('p');
    numberHolder.classList.add('text__block', 'number__block');
    numberHolder.textContent = number;

    const typeHolder = document.createElement('p');
    typeHolder.classList.add('text__block');
    typeHolder.textContent = `Type: ${type}`;

    cardContainer.appendChild(imgHolder);
    cardContainer.appendChild(nameHolder);
    cardContainer.appendChild(numberHolder);
    cardContainer.appendChild(typeHolder);

    const mainHolder = document.getElementById('pokedex');
    mainHolder.appendChild(cardContainer);

    //EVENT FOR SHOWING SINGLE POKEMON INFO-CARD

    cardContainer.addEventListener('click', function () {

        //creating a new container so it avoids the click eventlistener
        const newCardContainer = document.createElement('div');
        newCardContainer.classList.add('card__container');

        newCardContainer.appendChild(imgHolder);
        newCardContainer.appendChild(nameHolder);
        newCardContainer.appendChild(numberHolder);
        newCardContainer.appendChild(typeHolder);

        const abilitiesTitle = document.createElement('p');
        typeHolder.classList.add('text__block');
        typeHolder.textContent = 'ABILITIES LIST:\n\n';

        mainHolder.style.display = 'none';
        //make card bigger to display info
        newCardContainer.style.width = '300px';
        //GET ABILITIES TO DISPLAY

        abilities.forEach(e => {
            //let abilityName = e.name;
            const abilitieHolder = document.createElement('p');
            abilitieHolder.classList.add('text__block');
            abilitieHolder.textContent = e.ability.name.capitalize();

            newCardContainer.appendChild(abilitieHolder);
        })

        const singlePokemonContainer = document.getElementById('singlePokemonContainer');
        singlePokemonContainer.appendChild(newCardContainer);

        //GET LOCATION AREAS

        /**
         * -------------------TODO-> 
         * 
         *          location areas return full list of areas repeated
         *          ACTUAL OUTPUT:
         *              Kanto-route-3-area
         *              Kanto-route-5-area
         *              Kanto-route-6-area
         *              Kanto-route-7-area
         *              Kanto-route-8-area
         *              
         *          EXPECTED OUTPUT:
         * 
         *              Kanto-route
         */
        //-----------------LOCATION AREA FECTH

        // fetch(location).then(function (result) {

        //     return result.json();

        // }).then(data => {
        //     locations = data;

        //     locations.forEach(e => {
        //         const locationHolder = document.createElement('p');
        //         locationHolder.classList.add('text__block');
        //         locationHolder.textContent = e.location_area.name.capitalize();
        //         singlePokemonContainer.appendChild(locationHolder);

        //     })
        // });

        //---------------------------END LOCATION AREA FETCH


        //GOING BACK BUTTON
        const refreshButton = document.createElement('button');
        refreshButton.textContent = 'Back';
        refreshButton.classList.add('refresh__button');

        singlePokemonContainer.appendChild(refreshButton);
        refreshButton.addEventListener('click', () => document.location.reload());
    })
}

let allPokemons = {};
let pokemon = {};
let allPokemonsOrdered = [];

fetch('https://pokeapi.co/api/v2/pokemon?limit=150').then(function (result) {

    return result.json();

}).then(data => {
    allPokemons = data
    //console.log(allPokemons);
    getPokemonData();
});

function getPokemonData() {
    allPokemons.results.forEach(e => {
        fetch(e.url).then(function (result) {

            return result.json();

        }).then(data => {
            pokemon = data;

            allPokemonsOrdered.push(pokemon);

            if (allPokemonsOrdered.length === 150) {

                allPokemonsOrdered.sort(function (a, b) {
                    return a.id - b.id;
                });

                allPokemonsOrdered.forEach(e => {

                    let name = e.name;
                    let picture = e.sprites.front_default;
                    let number = e.id;
                    let type = e.types[0].type.name;
                    let abilities = e.abilities;
                    createPokemonCard(picture, name, number, type, abilities, /*pokemon.location_area_encounters*/);
                })
            }
        });
    })
}

// if (allPokemonsOrdered.length === 150) {

//     let name = pokemon.name;
//     let picture = pokemon.sprites.front_default;
//     let number = pokemon.id;
//     let type = pokemon.types[0].type.name;

//     createPokemonCard(picture, name, number, type/*, pokemon.abilities, pokemon.location_area_encounters*/);
// }


// --------------------------FUNCION DE BUSQUEDA EN TIEMPO REAL-----------

const searchField = document.getElementById('search_field');

searchField.addEventListener('input', function () {

    //we get all pokemons
    let pokemonList = document.querySelectorAll('div');

    //at each change make all pokemons visible first 
    for (let i = 0; i < pokemonList.length; i++) {

        pokemonList[i].classList.remove('hide');

    }
    //obtenemos la busqueda del usuario
    let search = searchField.value;

    for (let i = 0; i < pokemonList.length; i++) {

        if (pokemonList[i].innerText.toLowerCase().includes(search) === false) {

            pokemonList[i].classList.add('hide');

        }
    }
})

// ---------------------FIN BUSQUEDA EN TIEMPO REAL----------------------











