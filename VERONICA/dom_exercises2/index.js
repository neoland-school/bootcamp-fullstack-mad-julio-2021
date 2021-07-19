let ciudad = {
    nombre: 'Santa Marta',
    descripcion: 'Fue fundada el 29 de julio de 1525 por el español Rodrigo de Bastidas, lo que según los textos, la hace la ciudad en pie más antigua de Colombia. Es conocida por sus actividades turisticas, la historia de sus calles y sus playas.',
    pais: 'Colombia',
    urlImagen: 'https://blog.redbus.co/wp-content/uploads/2017/11/experiencia-santa-marta-colombia-camila-c351f3c56e46da3c095796608021365d.jpg',
    coordenadas: {
        latitud: '11.2407900',
        longitud: '-74.1990400',
    },
    urlLink: 'https://es.wikipedia.org/wiki/Santa_Marta_(Colombia)'
}

let ciudadTwo = {
    nombre: 'Medellin',
    descripcion: 'Es la ciudad más poblada del departamento y la segunda más poblada del país después de Bogotá.9​ Se asienta en la parte más ancha de la región natural conocida como Valle de Aburrá, en la cordillera central de los Andes.',
    pais: 'Colombia',
    urlImagen: 'https://cdn.getyourguide.com/img/location/5cced3e295e02.jpeg/88.jpg',
    coordenadas: {
        latitud: '6.217',
        longitud: '-75.567',
    },
    urlLink: 'https://es.wikipedia.org/wiki/Medell%C3%ADn'
}

let ciudadThree = {
    nombre: 'Cartagena',
    descripcion: 'Desde 1991 Cartagena es un Distrito Turístico y Cultural.8​ La ciudad está localizada a orillas del mar Caribe.',
    pais: 'Colombia',
    urlImagen: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Baluarte_de_Santiago_CTG_11_2019_9804.jpg',
    coordenadas: {
        latitud: '10.39972',
        longitud: '-75.51444',
    },
    urlLink: 'https://es.wikipedia.org/wiki/Cartagena_de_Indias'
}



function nameCities(ciudad) {

    const containerFather = document.createElement('div');
    const containerChildOne = document.createElement('div')
    const containerChildTwo = document.createElement('div')
    containerFather.appendChild(containerChildOne);
    containerFather.appendChild(containerChildTwo);
    const imagen = document.createElement('img');
    const title = document.createElement('h1');
    const paragraphDescription = document.createElement('p');
    const link = document.createElement('a');


    // Styles
    containerFather.classList.add('card');
    containerChildTwo.classList.add('text-container');
    imagen.classList.add('img-foto');

    // Content with the object
    imagen.src = ciudad.urlImagen;
    title.textContent = ciudad.nombre;
    paragraphDescription.textContent = ciudad.descripcion;
    link.textContent = 'Para más información.';
    link.href = ciudad.urlLink;



    containerChildOne.appendChild(imagen);
    containerChildTwo.appendChild(title);
    containerChildTwo.appendChild(paragraphDescription);
    containerChildTwo.appendChild(link);

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