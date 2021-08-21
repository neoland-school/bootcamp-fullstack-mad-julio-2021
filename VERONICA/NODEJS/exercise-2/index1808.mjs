import { unlink, readFile, writeFileSync, appendFileSync, copyFile} from 'fs';
//DEBO COLOCAR EN EL JSON UN TYPE : MODULE para que funcione

// 1- Crear un archivo txt con el nombre hello-world, que contenga vuestro nombre

writeFileSync("hello-world.txt", "Veka Tobias", function (err) {
  if (err) throw err;
  console.log("Saved local!");
});


// 2- Modificar el archivo anterior para añadir el dia y hora actual

let date = new Date();

appendFileSync("hello-world.txt", `Fecha: ${date}`, function (err) {
  if (err) throw err;
  console.log('Update');
});

// 3- Leer el contenido del archivo y pintarlo por pantalla

readFile('hello-world.txt', function(err, data) {
  if (err) throw err; // Lanzo mi error si hay error
  console.log(data.toString()); // data es un buffer como el stdin
});


// 4- HAcer una copia del archivo que se llame hello-world-2.txt

copyFile('hello-world.txt', 'hello-world-2.txt', function(err) {
  if (err) throw err; 
  console.log('Se ha creado nueva copia'); 
});

// 5- Borrar Hello-world.txt

unlink('hello-world.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});

