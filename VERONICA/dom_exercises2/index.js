let ciudad = {
    nombre: 'What Happened in Santa Marta?',
    descripcion: 'Es conocida por sus actividades turisticas, la historia de sus calles y sus playas.',
    pais: 'Colombia',
    urlImagen: 'https://blog.redbus.co/wp-content/uploads/2017/11/experiencia-santa-marta-colombia-camila-c351f3c56e46da3c095796608021365d.jpg',
    coordenadas: {
        latitud: '11.2407900',
        longitud: '-74.1990400',
    },
    urlLink: 'https://es.wikipedia.org/wiki/Santa_Marta_(Colombia)',
    day: '19 July 2021'
}

let ciudadTwo = {
    nombre: 'What Happened in Medellin?',
    descripcion: 'Es la ciudad más poblada del departamento y la segunda más poblada del país después de Bogotá.',
    pais: 'Colombia',
    urlImagen: 'https://cdn.getyourguide.com/img/location/5cced3e295e02.jpeg/88.jpg',
    coordenadas: {
        latitud: '6.217',
        longitud: '-75.567',
    },
    urlLink: 'https://es.wikipedia.org/wiki/Medell%C3%ADn',
    day: '19 July 2021'

}

let ciudadThree = {
    nombre: 'What Happened in Cartagena?',
    descripcion: 'Cartagena tiene uno de los puertos de mayor importancia de Colombia, del Caribe y del mundo, así como un célebre destino turístico.',
    pais: 'Colombia',
    urlImagen: 'https://conocedores.com/wp-content/uploads/2019/07/cartagena-26072019.jpg',
    coordenadas: {
        latitud: '10.39972',
        longitud: '-75.51444',
    },
    urlLink: 'https://es.wikipedia.org/wiki/Cartagena_de_Indias',
    day: '19 July 2021'

}



function nameCities(ciudad) {
    //CREAR ELEMENTOS
    const containerFather = document.createElement('div');
    const containerChildOne = document.createElement('div')
    const containerChildTwo = document.createElement('div')
    const containerChildThree = document.createElement('div')
    const imagen = document.createElement('img');
    const title = document.createElement('h1');
    const paragraphDescription = document.createElement('p');
    const link = document.createElement('a');
    const day = document.createElement('p');

    // Styles
    containerFather.classList.add('card');
    containerChildTwo.classList.add('text-container');
    title.classList.add('title');
    imagen.classList.add('img-foto');
    day.classList.add('text-day');
    paragraphDescription.classList.add('descript-card')
    containerChildThree.classList.add('div-link');
    link.classList.add('link-info');
    
   

    // ENLAZANDO CON EL OBJETO
    imagen.src = ciudad.urlImagen;
    title.textContent = ciudad.nombre;
    paragraphDescription.textContent = ciudad.descripcion;
    link.textContent = 'For more information.';
    link.href = ciudad.urlLink;
    day.textContent = ciudad.day;


    //AGREGANDOLO AL HTML
    containerFather.appendChild(containerChildOne);
    containerFather.appendChild(containerChildTwo);
    containerFather.appendChild(containerChildThree);
    containerChildOne.appendChild(imagen);
    containerChildTwo.appendChild(day);
    containerChildTwo.appendChild(title);
    containerChildTwo.appendChild(paragraphDescription);
    containerChildThree.appendChild(link);
  

    document.body.appendChild(containerFather);

    return containerFather;
}

// nameCities(ciudad);
// nameCities(ciudadTwo);
// nameCities(ciudadThree);

// 1. crear de arrays de ciudades 2/ funcion que reciba array de ciudades y cree las cards en el html 

let arrCities = [ciudad, ciudadTwo, ciudadThree];

function addCitiesToTheDom(arrcities) {
    arrCities.forEach(e => document.body.appendChild(nameCities(e)));
}

addCitiesToTheDom(arrCities);