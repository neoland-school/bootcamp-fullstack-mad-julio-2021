//----------EXERCISE1,2----------

let city1 = {
    name: 'Granada',
    description: 'One of Spain’s most frequently visited tourist centres, Granada contains many notable architectural and artistic monuments.The Alhambra and the Generalife were collectively designated a UNESCO World Heritage site in 1984; the Albaicín was added in 1994.',
    country: 'Spain',
    urlImage: './resources/granada.jpg',
    coordinates: {
        latitude: '37.18817',
        longitude: '-3.60667'
    }
}

let city2 = {
    name: 'Fes',
    description: 'The oldest of Morocco’s four imperial cities, it was founded on the banks of the Wadi Fès. Fès reached its zenith as a centre of learning and commerce under the Marīnids in the mid-14th century and has kept its religious primacy through the ages.',
    country: 'Morocco',
    urlImage: './resources/fes.jpg',
    coordinates: {
        latitude: '34.03313',
        longitude: '-5.00028'
    }
}
let city3 = {
    name: 'Kyoto',
    description: "Kyoto, officially Kyoto City (京都市, Kyōto-shi), is the capital city of Kyoto Prefecture in Japan. Located in the Kansai region on the island of Honshu, Kyoto forms a part of the Keihanshin metropolitan area along with Osaka and Kobe.",
    country: 'Japan',
    urlImage: './resources/kyoto.jpg',
    coordinates: {
        latitude: '35.011667',
        longitude: '135.768333'
    }
}
let city4 = {
    name: 'Madrid',
    description: 'Madrid lies on the River Manzanares in the center of both the country and the Community of Madrid region, of which it is also the capital. As the capital city of Spain, seat of government, residence of the Spanish monarch, Madrid is also the political, economic and cultural centre of the country.',
    country: 'Spain',
    urlImage: './resources/madrid.jpg',
    coordinates: {
        latitude: '40.416667',
        longitude: '-3.716667'
    }
}
let city5 = {
    name: 'Aachen',
    description: 'Aachen developed from a Roman settlement and spa, subsequently becoming the preferred medieval Imperial residence of Emperor Charlemagne of the Frankish Empire, and, from 936 to 1531, the place where thirty-one Holy Roman Emperors were crowned Kings of the Germans.',
    country: 'Germany',
    urlImage: './resources/aachen.jpg',
    coordinates: {
        latitude: '50.775556',
        longitude: '6.083611'
    }
}

//----------EXERCISE3,4----------

// let description1 = document.createElement('p');
// description1.textContent = city1.description;

// let cityName1 = document.createElement('h2');
// cityName1.textContent = city1.name;

// let cityCoordinates1 = document.createElement('h4');
// cityCoordinates1.textContent = `LAT: ${city1.coordinates.latitude}, LON: ${city1.coordinates.longitude}`;

// let cardBody1 = document.createElement('div');

// let cityImage1 = document.createElement('img');
// cityImage1.src = city1.urlImage;
// cityImage1.className = 'picture';

// let cityCountry1 = document.createElement('h3');
// cityCountry1.textContent = city1.country;
// cityCountry1.className = 'country';

// let cardHeader1 = document.createElement('div');
// cardHeader1.className = 'card_header';

// let card1 = document.createElement('article');
// card1.className = 'card';

// let cardContainer = document.createElement('article');
// cardContainer.className = 'card_container';

// cardHeader1.appendChild(cityCountry1);
// cardHeader1.appendChild(cityImage1);
// cardBody1.appendChild(cityCoordinates1);
// cardBody1.appendChild(cityName1);
// cardBody1.appendChild(description1);

// card1.appendChild(cardHeader1);
// card1.appendChild(cardBody1);

// cardContainer.appendChild(card1);

// document.body.appendChild(cardContainer);

//----------EXERCISE5----------

function createCityCard(city) {
    const description = document.createElement('p');
    description.textContent = city.description;
    description.classList.add('card_body_text');

    const cityName = document.createElement('h2');
    cityName.textContent = city.name;
    cityName.classList.add('card_body_text');

    const cityCoordinates = document.createElement('h4');
    cityCoordinates.textContent = `LAT: ${city.coordinates.latitude}, LON: ${city.coordinates.longitude}`;
    cityCoordinates.classList.add('card_body_text');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card_body');

    const cityImage = document.createElement('img');
    cityImage.src = city.urlImage;
    cityImage.classList.add('picture');

    const cityCountry = document.createElement('h3');
    cityCountry.textContent = city.country;
    cityCountry.classList.add('country');

    const cardHeader = document.createElement('div');
    cardHeader.classList.add('card_header');

    const card = document.createElement('article');
    card.classList.add('card');

    cardHeader.appendChild(cityCountry);
    cardHeader.appendChild(cityImage);
    cardBody.appendChild(cityCoordinates);
    cardBody.appendChild(cityName);
    cardBody.appendChild(description);

    card.appendChild(cardHeader);
    card.appendChild(cardBody);

    return card;
}

//----------EXERCISE6----------

function printCardList(cardArray) {
    let cardContainer = document.createElement('article');
    cardContainer.classList.add('card_container');

    cardArray.forEach(e => cardContainer.appendChild(createCityCard(e)));

    document.body.appendChild(cardContainer);
}

let testArray = [city1, city2, city3, city4, city5];

printCardList(testArray);

