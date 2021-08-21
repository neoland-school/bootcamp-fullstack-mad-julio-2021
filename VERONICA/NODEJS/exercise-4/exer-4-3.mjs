// 3- Crear un servidor de aplicaciones en un puerto que el usuario meta por argumento de entrada (3500 si no mete ninguno) y que cuando se haga una petición devuelva este JSON ({"data": "Hello World"})

import http from 'http';

const port = process.argv?.[2] || 3500;


const server = http.createServer((req,res) => {
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'application/json'); // indico que la respuesta es en formato JSON
    const data = {
        'data':'Hello World'
    }
    res.end(JSON.stringify(data)); 
});
server.listen(port, () => {
    console.log(`El servidor está escuchando en el puerto: ${port}`);
})

//Se coloca node y el nombre del archivo en la terminal y colocar el numero del puerto en el navegador
