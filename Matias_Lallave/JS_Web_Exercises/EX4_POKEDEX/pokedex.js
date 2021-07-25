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
                            SPEED: ${arrayPokemon[newcardDOM.id - 1].stats[5].base_stat}]`

    moreDataDOM.appendChild(weightDOM);
    moreDataDOM.appendChild(heightDOM);
    moreDataDOM.appendChild(statsDOM);

    newcardDOM.appendChild(moreDataDOM);

    newcardDOM.addEventListener('click', restart);

    pokedexDOM.appendChild(newcardDOM);
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

        arrayPokemon.filter(v => v.name.includes(searchBarDOM.value)).forEach(v => printPokemon(v));
}

// --> FETCH AND SAVE POKEMONS IN A LOCAL ARRAY

fetch(firstGen)
    .then(response => response.json())
    .then(data => {
        data.results.forEach(v => {
            fetch(v.url)
                .then(response => response.json())
                .then(data => {
                    arrayPokemon.push(data);
                    printPokemon(data);
                })
        });
    });


// --> SEARCHING BAR

searchBarDOM.addEventListener('input', searching);