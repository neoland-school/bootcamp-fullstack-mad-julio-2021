// 4- Modificar el servidor del ejercicio anterior para que lea un parámetro de query llamado `format` cuyos valores pueden ser (JSON, TEXT, HTML). En función del valor del parámetro devuelva:
// - HTML con un h1 que diga hello world
// - JSON que pinta la misma información que en el ejercicio 3 (Opción por defecto si no se introduce parámetro)
// - TEXT que devuelve el string 'Hello World'


import http from 'http';

const s = http.createServer((req,res) => {
    // Función que se va a ejecutar cuando un cliente haga una peticion a mi servidor (TODAS)

    // Si el parametro de query format vale `html` tengo que devolver <h1>hello world</h1>
    // Si el parámetro de query format vale `json` o no existe tengo que devolver {"data": "HEllo World"}
    // Si el parámetro de query format vale `text` tengo que devolver hello world

    // ¿Como cojo el parámetro format?. Ayer os hablé del módulo url de nodejs. 
    const reqUrl = new URL(req.url, `http://${req.headers.host}`); // genero el objeto URL con todas sus partes
    const format = reqUrl.searchParams.get('format'); // obtengo el valor parámetro format
    res.statusCode = 200;
    if(format === 'html'){
        // tengo que devolver <h1>hello world</h1>
        res.setHeader('Content-Type', 'text/html');
        // res.writeHead(200, {'Content-Type': 'text/html'}) // Linea equivalente a las dos anteriores
        res.end('<h1>hello world</h1>'); // escribo la respuesta y la termino a la vez
    }else if(format === 'text'){
        res.setHeader('Content-Type', 'text/plain');
        // res.writeHead(200, {'Content-Type': 'text/plain'}) // Linea equivalente a las dos anteriores
        res.end('Hello world'); // escribo la respuesta y la termino a la vez
    }else {
        res.setHeader('Content-Type', 'application/json');
        // res.writeHead(200, {'Content-Type': 'application/json'}) // Linea equivalente a las dos anteriores
        res.end('{"data": "HEllo World"}'); // escribo la respuesta y la termino a la vez
    }
});


s.listen(6565, () => console.log('Server escuchando en el 6565'))
