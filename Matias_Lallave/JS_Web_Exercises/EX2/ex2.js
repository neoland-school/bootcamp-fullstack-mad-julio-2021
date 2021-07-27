let cityMadrid = {
  name: "Madrid",
  description: "A city without beach",
  country: "Spain",
  url: "https://zigzagdigital.com/upload/img/periodico/img_20088.jpg",
  coords: {
    lat: 40.4167754,
    long: -3.7037902,
  },
};

let cityBarcelona = {
  name: "Barcelona",
  description: "A city with beach",
  country: "Spain",
  url: "https://lp-cms-production.imgix.net/2021-02/shutterstockRF_1347219839.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850",
  coords: {
    lat: 56.4167754,
    long: 0.7037902,
  },
};

let cityValencia = {
  name: "Valencia",
  description: "A city with almost beach",
  country: "Venezuela",
  url: "http://www.valencia24.net/images/sunsetcity.jpg",
  coords: {
    lat: -46.4167754,
    long: -46.7037902,
  },
};

let cities = [cityMadrid, cityBarcelona, cityValencia];

function createCityCardHeader(urlImage, country) {
  /**------------ HEADER -------------- */

  /** img */
  const cardHeaderImg = document.createElement("img");
  cardHeaderImg.src = urlImage;
  cardHeaderImg.classList.add("img__block");

  /** h2 */

  const cardHeaderTitle = document.createElement("h2");
  cardHeaderTitle.textContent = country;
  cardHeaderTitle.classList.add("title__block");

  /** div- header container */

  const cardHeaderContainer = document.createElement("div");
  cardHeaderContainer.classList.add("card__header");
  cardHeaderContainer.appendChild(cardHeaderImg);
  cardHeaderContainer.appendChild(cardHeaderTitle);

  return cardHeaderContainer;
}

function createCityCardBody(name, description, coords) {
  /**------------ BODY -------------- */
  /** H3 */
  const cardBodyTitle = document.createElement("h3");
  cardBodyTitle.textContent = name;
  /** p - description */
  const cardBodyDescription = document.createElement("p");
  cardBodyDescription.textContent = description;
  /** p - lat */
  const cardBodyLat = document.createElement("p");
  cardBodyLat.textContent = coords.lat;
  /** p - long */
  const cardBodyLong = document.createElement("p");
  cardBodyLong.textContent = coords.long;
  /** div - card body container */
  const cardBodyContainer = document.createElement("div");
  cardBodyContainer.classList.add("card__body");
  cardBodyContainer.appendChild(cardBodyTitle);
  cardBodyContainer.appendChild(cardBodyDescription);
  cardBodyContainer.appendChild(cardBodyLat);
  cardBodyContainer.appendChild(cardBodyLong);

  return cardBodyContainer;
}

function createCityCard(city) {
  /** ------------ CARD MAIN CONTAINER ---------- */
  const cardMainContainer = document.createElement("article");
  cardMainContainer.classList.add("card__container");
  cardMainContainer.appendChild(createCityCardHeader(city.url, city.country));
  cardMainContainer.appendChild(createCityCardBody(city.name, city.description, city.coords));

  return cardMainContainer;
}

function printCities(cities) {
  const cardListContainer = document.createElement('section');
  cardListContainer.classList.add('cities__container');
  cities.forEach(c => cardListContainer.appendChild(createCityCard(c)));
  document.body.appendChild(cardListContainer);
}

const button = document.createElement('button');
button.textContent = 'Add card';
document.body.appendChild(button);

const cardListContainer = document.createElement('section');
cardListContainer.classList.add('cities__container');
document.body.appendChild(cardListContainer);

const localCardHistory = JSON.parse(localStorage.getItem('cardhistory'));
let i = localCardHistory !== null ? localCardHistory : 0;

function addNewCard() {
  if (i < cities.length) {
    cardListContainer.appendChild(createCityCard(cities[i]));
    i++;
    localStorage.setItem('cardhistory', JSON.stringify(i));
  }

  if (i === cities.length) {
    button.style.display = 'none';
  }
}

function printHistoryCard(cities, pos) {
  for (let j = 0; j < pos; j++) {
    cardListContainer.appendChild(createCityCard(cities[j]));
  }
}

printHistoryCard(cities, i);

button.addEventListener('click', addNewCard);