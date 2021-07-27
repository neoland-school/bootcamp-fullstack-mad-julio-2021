// --> SET GLOBAL VARIABLES AND DOM MAIN STRUCTURE

const firstGen = 'https://pokeapi.co/api/v2/pokemon?limit=150'

const arrayPokemon = [];

const headerDOM = document.createElement('header');
headerDOM.classList.add('header');

const titleDOM = document.createElement('p');
titleDOM.textContent = 'Just a Pokedex'
titleDOM.classList.add('title');

const searchBarDOM = document.createElement('input')
searchBarDOM.type = "text";
searchBarDOM.placeholder = "Search a Pokemon";
searchBarDOM.classList.add('search_bar');

headerDOM.appendChild(searchBarDOM);
headerDOM.appendChild(titleDOM);

document.body.appendChild(headerDOM);

const pokedexDOM = document.createElement('article');
pokedexDOM.classList.add('pokedex_box');
document.body.appendChild(pokedexDOM);

// --> FUNCTIONS

function setTypeStyle(type, htmlElement) {
    switch (type) {
        case 'fire':
            htmlElement.classList.add('format_type', 'fire_type');
            break;
        case 'water':
            htmlElement.classList.add('format_type', 'water_type');
            break;
        case 'grass':
            htmlElement.classList.add('format_type', 'grass_type');
            break;
        case 'poison':
            htmlElement.classList.add('format_type', 'poison_type');
            break;
        case 'psychic':
            htmlElement.classList.add('format_type', 'psychic_type');
            break;
        case 'normal':
            htmlElement.classList.add('format_type', 'normal_type');
            break;
        case 'bug':
            htmlElement.classList.add('format_type', 'bug_type');
            break;
        case 'ghost':
            htmlElement.classList.add('format_type', 'ghost_type');
            break;
        case 'flying':
            htmlElement.classList.add('format_type', 'flying_type');
            break;
        case 'fighting':
            htmlElement.classList.add('format_type', 'fighting_type');
            break;
        case 'fairy':
            htmlElement.classList.add('format_type', 'fairy_type');
            break;
        case 'ground':
            htmlElement.classList.add('format_type', 'ground_type');
            break;
        case 'rock':
            htmlElement.classList.add('format_type', 'rock_type');
            break;
        case 'steel':
            htmlElement.classList.add('format_type', 'steel_type');
            break;
        case 'electric':
            htmlElement.classList.add('format_type', 'electric_type');
            break;
        case 'ice':
            htmlElement.classList.add('format_type', 'ice_type');
            break;
        case 'dragon':
            htmlElement.classList.add('format_type', 'dragon_type');
            break;
        default:
            break;
    }
}

function restart() {
    pokedexDOM.innerHTML = '';
    arrayPokemon.forEach(v => printPokemon(v));
}

function showMoreData() {
    pokedexDOM.innerHTML = '';

    const newcardDOM = printPokemon(arrayPokemon[this.id - 1]);

    const moreDataDOM = document.createElement('div');

    const heightDOM = document.createElement('p');
    heightDOM.textContent = `Height: ${(arrayPokemon[newcardDOM.id - 1].height)/10} m.`;

    const weightDOM = document.createElement('p');
    weightDOM.textContent = `Weight: ${(arrayPokemon[newcardDOM.id - 1].weight)/10} kg.`;

    const statsDOM = document.createElement('p');
    statsDOM.textContent = `Base stats: 
                            [HP: ${arrayPokemon[newcardDOM.id - 1].stats[0].base_stat}, 
                            ATK: ${arrayPokemon[newcardDOM.id - 1].stats[1].base_stat}, 
                            DEF: ${arrayPokemon[newcardDOM.id - 1].stats[2].base_stat}, 
                            SP-ATK: ${arrayPokemon[newcardDOM.id - 1].stats[3].base_stat}, 
                            SP-DEF: ${arrayPokemon[newcardDOM.id - 1].stats[4].base_stat}, 
                            SPEED: ${arrayPokemon[newcardDOM.id - 1].stats[5].base_stat}]`;

    const newButtonDOM = document.createElement('button');
    newButtonDOM.textContent = 'BACK';
    newButtonDOM.addEventListener('click', restart);
    newButtonDOM.classList.add('back_button');

    moreDataDOM.appendChild(weightDOM);
    moreDataDOM.appendChild(heightDOM);
    moreDataDOM.appendChild(statsDOM);

    newcardDOM.appendChild(moreDataDOM);

    pokedexDOM.appendChild(newButtonDOM);
    pokedexDOM.appendChild(newcardDOM);


    pokedexDOM.classList.add('pokedex_box_center');
    newcardDOM.classList.remove('card');
    newcardDOM.classList.add('newCard');
}

function printPokemon(pokemon) {
    const cardDOM = document.createElement('div');
    cardDOM.classList.add('card');
    cardDOM.id = pokemon.id;
    cardDOM.setAttribute('clicked', 'false');
    cardDOM.addEventListener('click', showMoreData);

    const imgDOM = document.createElement('img')
    imgDOM.src = pokemon.sprites.front_default;
    cardDOM.appendChild(imgDOM);

    const nameDOM = document.createElement('p');
    nameDOM.textContent = `#${pokemon.id} ${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.slice(1)}`;
    nameDOM.classList.add('name');
    cardDOM.appendChild(nameDOM);

    if (pokemon.types.length === 1) {
        const type1DOM = document.createElement('p');
        type1DOM.textContent = pokemon.types[0].type.name.toUpperCase();
        setTypeStyle(pokemon.types[0].type.name, type1DOM);
        cardDOM.appendChild(type1DOM);
    }
    if (pokemon.types.length === 2) {
        const type1DOM = document.createElement('p');
        type1DOM.textContent = pokemon.types[0].type.name.toUpperCase();
        setTypeStyle(pokemon.types[0].type.name, type1DOM);
        cardDOM.appendChild(type1DOM);

        const type2DOM = document.createElement('p');
        type2DOM.textContent = pokemon.types[1].type.name.toUpperCase();
        setTypeStyle(pokemon.types[1].type.name, type2DOM);
        cardDOM.appendChild(type2DOM);
    }

    pokedexDOM.appendChild(cardDOM);

    return cardDOM;
}

function searching() {
    pokedexDOM.innerHTML = '';

    arrayPokemon.filter(v => v.name.includes(searchBarDOM.value.toLowerCase())).forEach(v => printPokemon(v));
}

// --> FETCH AND SAVE POKEMONS IN A LOCAL ARRAY

fetch(firstGen)
    .then(response => response.json()) // Esto genera una promesa, con sunstatus y su value conteniendo una response, con su codigo de respuesta, sus cabeceras y sus cosas. Le aplico un json para darle formato legible y sacar los datos en otra promesa
    .then(data => { // Esto devuelve el objeto promesa con los datos solicitados, entre ellos hay un array de objetos con los valores name y url de cada pokemon, que tengo que recorrer para recuperar cada uno de los objetos pokemon. Para ello tendre que usar el allSettled y crear el primer "dique"
        Promise.allSettled(data.results.map(v => fetch(v.url))) // Esto devuelve una promesa, y un array de lo que parecen ser responses, lo cual tiene sentido porque acabo de hacer otro fetch a cada una de las url de cada pokemon
            .then(response => Promise.allSettled(response.map(v => v.value.json()))) // Lo que me salio de la anterior linea era una promesa con su status y su value, pero el value tenia un array con promesas cuyo value era responses, por tanto tengo que hacerle el json. el map me saca un array de promesas con los datos ya, espero
            .then(data => data.forEach(pokemon => { //Aquí se recibe otra promesa, que en su value tiene un array con, ahora ya sí, los objetos pokemon que estabamos buscando, con lo cual podemos hacer un foreach para realizar nuestras cool stuffs (en este caso imprimir por pantalla y guardarlos en un array local)
                arrayPokemon.push(pokemon.value);
                printPokemon(pokemon.value);
            }));
    });

// const promises = [fetch('https://pokeapi.co/api/v2/pokemon/1/'), fetch('https://pokeapi.co/api/v2/pokemon/2/')];


// Promise.allSettled(promises)
// .then(res => Promise.allSettled(res.map(e => e.value.json())))
// .then(res => res.forEach(p => printPokemon(p.value)));


// --> SEARCHING BAR

searchBarDOM.addEventListener('input', searching);