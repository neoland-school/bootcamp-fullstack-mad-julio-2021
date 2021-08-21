// 5- Crear un programa que cree un archivo con los primeros 100 números pares. Modificar el programa para que le entre un numero y el path donde se tiene que generar el archivo como argumentos del programa (node app.js 1000 C:/users/aaa/Desktop), e escribirá en el archivo los primeros numeropares. La ruta puede ser relativa y entonces se creará de manera relativa al programa. Además si en la ruta hay directorios que no existen, habrá que crearlos.
// Hint: Para realizar esta aplicación vamos a tener que pensar mucho en como ir viendo y creando los directorios que no existen. Podrían ser utiles los siguientes métodos:
// Modulo fs
// access: me ayuda a saber si un directorio existe o no
// Modulo path
// isAbsolute: me indica si una ruta es absoluta o no
// resolve: me devuelve la ruta absoluta dada una ruta relativa
// normalize: me genera una ruta limpia. EJ: C:/users/alex/demo/../ === C:/users/alex/

fs.writeFile("first-file", "Hello First File!", function (err) {
    if (err) throw err;
    console.log("Saved local!");
  });
