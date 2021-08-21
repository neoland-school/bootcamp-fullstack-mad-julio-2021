// 2- Crear un programa que cree un archivo de tipo JSON en el que escribamos una lista de países, procedentes de una constante que declaremos al principio del programa con datos que nosotros le demos "a fuego" (pueden ser vuestros 15 países favoritos), con los siguientes atributos (nombre, continente, y prefijo telefónico)

import {writeFile} from 'fs';


const myCountries = [
 {
   nombre: 'Colombia',
   continente: 'América',
   prefijoTelefonico: +57,
 },
 {
  nombre: 'Francia',
  continente: 'Europa',
  prefijoTelefonico: +33,
},
{
  nombre: 'Bélgica',
  continente: 'Europa',
  prefijoTelefonico: +32,
},
{
  nombre: 'Suiza',
  continente: 'Europa',
  prefijoTelefonico: +41,
},
{
  nombre: 'Portugal',
  continente: 'Europa',
  prefijoTelefonico: +351,
},
{
  nombre: 'Camboya',
  continente: 'Asia',
  prefijoTelefonico: +855,
},
{
  nombre: 'Arabia Saudita',
  continente: 'Asia',
  prefijoTelefonico: +966,
},
{
  nombre: 'Costa de marfil',
  continente: 'Africa',
  prefijoTelefonico: +225,
},
{
  nombre: 'Egipto',
  continente: 'Africa',
  prefijoTelefonico: +20,
},
{
  nombre: 'Argelia',
  continente: 'Africa',
  prefijoTelefonico: +213,
},
{
  nombre: 'Argentina',
  continente: 'América',
  prefijoTelefonico: +54,
},
{
  nombre: 'Bolivia',
  continente: 'América',
  prefijoTelefonico: +591,
},
{
  nombre: 'Canadá',
  continente: 'América',
  prefijoTelefonico: +1,
},
{
  nombre: 'Cuba',
  continente: 'América',
  prefijoTelefonico: +53,
},
];



writeFile("countries.json", JSON.stringify(myCountries), function (err) {
    if (err) throw err;
    console.log("Saved local!");
  });