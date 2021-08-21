// 6- Creación de nuestro comando ls + cat. Crear un programa en node que ejecute lo siguiente:
// - Al iniciar aparezca un menu por consola con los siguientes opciones (Listar directorio, borrar fichero, ver fichero y salir)
// - La opción de listar directorio, pedirá la ruta del directorio al usuario y mostrará un listado de los archivos y directorios (indicando sus permisos como si fuese el comando ls. Un ejemplo de output podría ser este )
// - La opción de borrar fichero, solicitará la ruta y eliminará el fichero o el directorio.
// - La opción de ver fichero, solicitará la ruta y pintará las últimas 30 líneas del fichero por pantalla.
// - La opción de salir terminará el programa.
// Como extra se podría hacer shorcuts de los comandos y asi no tener que mostrar el menú al usuario: Ejemplo: node index.js ls C:/..../mi_directorio, node index.js rm C:/.../mi_archivo.txt, node index.js tail C:/.../mi_archivo.txt

// brew update
// brew upgrade node

// var methods = ['isBlockDevice', 'isCharacterDevice', 'isDirectory', 'isFIFO', 'isFile', 'isSocket', 'isSymbolicLink'];

// var res = fs.readdirSync("C:\\", { withFileTypes: true }).map(d => {
//   var cur = { name: d.name }
//   for (var method of methods) cur[method] = d[method]()
//   return cur
// })

// console.table(res)

// https://github.com/nodejs/node/blob/master/lib/internal/fs/utils.js#L118
// lib/internal/fs/utils.js:118
//   COPYFILE_FICLONE_FORCE

// https://stackoverflow.com/questions/11775884/nodejs-file-permissions