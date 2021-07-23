// 1- Crear documento HTML con un body vacío.

// 2- Crear un objeto que represente una ciudad y que tenga los siguientes atributos, dandole valor con una ciudad que queráis :
// 	- Nombre
// 	- Description
// 	- Pais
// 	- urlImagen
// 	- coordenadas:
// 		- latitud
// 		- longitud

let ciudad = {
    nombre: 'Sevilla',
    descripcion: 'Seville has a municipal population of about 690,000 as of 2016, and a metropolitan population of about 1.5 million, making it the largest city in Andalusia, the fourth-largest city in Spain and the 26th most populou...',
    pais: 'España',
    urlImagen: 'https://www.hotelalcazar.com/wp-content/blogs.dir/1791/files/sevilla/sevilla-cabecera-movil.jpg',
    coordenadas: {
        latitud: '37° 23′ 24″ N',
        longitud: '5° 59′ 24″ W'
    },
    urlWiki: 'https://en.wikipedia.org/wiki/Seville'
}
let ciudad2 = {
    nombre: 'Madrid',
    descripcion: 'Madrid (/məˈdrɪd/, Spanish: [maˈðɾið])[n. 1] is the capital and most-populous city of Spain. The city has almost 3.4 million[8] inhabitants and a metropolitan area population of approximately 6.7 million...',
    pais: 'España',
    urlImagen: 'https://lp-cms-production.imgix.net/features/2019/06/shutterstockRF_378537616-8e1299019a15.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850',
    coordenadas: {
        latitud: '40° 25′ 0″ N',
        longitud: '3° 43′ 0″ W'
    },
    urlWiki: 'https://en.wikipedia.org/wiki/Madrid'
}
let ciudad3 = {
    nombre: 'Santa Cruz de Tenerife',
    descripcion: 'Santa Cruz de Tenerife, commonly abbreviated as Santa Cruz (/ˌsæntə ˈkruːz/, Spanish: [santa ˈkɾuθ]), is a major city, capital of the island of Tenerife, Province of Santa Cruz de Tenerife, and capital...',
    pais: 'España',
    urlImagen: 'https://dotravel.com/uploads/destination/29/mobile/Santa-Cruz-de-Tenerife.jpg',
    coordenadas: {
        latitud: '28° 28′ 0″ N',
        longitud: '16° 15′ 0″ W'
    },
    urlWiki: 'https://en.wikipedia.org/wiki/Santa_Cruz_de_Tenerife'
}
let ciudad4 = {
    nombre: 'Cordoba',
    descripcion: 'Córdoba (/ˈkɔːrdəbə/; Spanish: [ˈkoɾðoβa]),[a] or Cordova (/ˈkɔːrdəvə/)[6][7] in English, is a city in Andalusia, southern Spain, and the capital of the province of Córdoba. It is the third...',
    pais: 'España',
    urlImagen: 'https://visitsouthernspain.com/wp-content/uploads/2020/04/Canva-Cordoba-Spain..jpg',
    coordenadas: {
        latitud: '37° 53′ 4.22″ N',
        longitud: '4° 46′ 46.45″ W'
    },
    urlWiki: 'https://en.wikipedia.org/wiki/C%C3%B3rdoba,_Spain'
}


// 3- Generar un HTML con JS con un formato similar al siguiente, con los datos de la ciudad de la variable del ejercicio anterior

// const divElem = document.createElement('div');
// const img = document.createElement('img');
// const loc = document.createElement('p');
// const title = document.createElement('h2');
// const paragraph = document.createElement('p');
// const link = document.createElement('a');

// divElem.classList.add('card');
// img.classList.add('foto');

// img.src = ciudad.urlImagen;
// loc.textContent = ciudad.coordenadas.latitud + ' ' + ciudad.coordenadas.longitud;
// title.textContent = 'Come to explore ' + ciudad.nombre;
// paragraph.textContent = ciudad.descripción;
// link.textContent = 'FIND OUT MORE';
// link.href = ciudad.urlWiki;




// 4- Añadir ese HTML al DOM


// const bodyContainer = document.body;

// bodyContainer.appendChild(divElem);

// divElem.appendChild(img);
// divElem.appendChild(loc);
// divElem.appendChild(title);
// divElem.appendChild(paragraph);
// divElem.appendChild(link);


// 5- Generar una función que dado una ciudad, devuelva el elemento del DOM de la card para poder añadirlo al DOM de la página
function generateImageCard(src) {

    const img = document.createElement('div');
    img.classList.add('foto');
    img.style.backgroundImage = `url(${src})`;

    return img;
}

function generateLocP(coordenadas) {

    const loc = document.createElement('p');
    loc.textContent = coordenadas.latitud + ' ' + coordenadas.longitud;

    return loc;
}

function generateTitle(nombre) {
    const title = document.createElement('h2');
    title.textContent = 'Come to explore ' + nombre;

    return title;
}
function generateParagraph(description) {
    const paragraph = document.createElement('p');
    paragraph.textContent = description;

    return paragraph;
}
function generateLink() {
    const link = document.createElement('a');
    link.textContent = 'FIND OUT MORE';
    link.href = ciudad.urlWiki;

    return link;
}

function getCardDOM(ciudad) {

    const divElem = document.createElement('div');

    divElem.classList.add('card');

    divElem.appendChild(generateImageCard(ciudad.urlImagen));
    divElem.appendChild(generateLocP(ciudad.coordenadas));
    divElem.appendChild(generateTitle(ciudad.nombre));
    divElem.appendChild(generateParagraph(ciudad.descripcion));
    divElem.appendChild(generateLink(ciudad.urlWiki));

    return divElem;
}


// 6- Generar una funcion que dado un array de ciudades, pinte una lista de cards posicionadas por flex.

const ciudades = [ciudad, ciudad2, ciudad3, ciudad4];

function addCitiesToDOM(cityArray) {

    cityArray.forEach(e => document.body.appendChild(getCardDOM(e)));

}

addCitiesToDOM(ciudades);