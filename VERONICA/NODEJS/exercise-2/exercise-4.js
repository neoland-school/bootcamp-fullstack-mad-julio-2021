// 4- Crear un programa que liste todos los archivos y directorios de la carpeta Home del usuario que ejecuta el programa, indicando si es archivo o directorio.
// Hint: Para saber la carpeta home de un usuario se puede usar el módulo OS https://nodejs.org/api/os.html
// Ejemplo:
// > node list-dir.js
// f mi_archivo.txt
// d mi_directorio

import { homedir } from 'os';
import fs from 'fs';


fs.readdir(homedir(),{withFileTypes:true},(err, files)=>{
    files.map((f) => {
    if (f.isFile()){
        console.log('File: ' + f.name);
    } else {
        console.log('Directory: ' + f.name);
    }
    })
});
      