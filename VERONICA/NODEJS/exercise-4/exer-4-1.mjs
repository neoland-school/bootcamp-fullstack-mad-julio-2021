// 1- Crear una aplicación nodejs que solicite la información de las ciudades de esta URL (https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json) y guarde en un archivo countries.json, las ciudades cuyo prefijo telefónico termina por 4.

import https from 'https';
import fs from 'fs';
import http from 'http';
const options = {
    hostname: 'gist.githubusercontent.com',
    port: 443,
    path: '/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf',
    method: 'GET'
};
const req = https.request(options, res => {
    let data = '';
    res.on('data', d => {  //gestiono respuesta y almaceno los datos en una variable auxiliar
        data += d;          // d es un buffer que se convierte a string
    });
    res.on('end', () => {
        const dataJSON = JSON.parse(data);  // transform to json
        const countries = dataJSON.countries.filter(c =>c.dial_code.endsWith('4'));
        fs.writeFile('countries.json', (JSON.stringify(countries)), err => {  // respuesta en un archivo
            if (err) throw err;
        });
        console.log(countries);
    });
});
req.end();
