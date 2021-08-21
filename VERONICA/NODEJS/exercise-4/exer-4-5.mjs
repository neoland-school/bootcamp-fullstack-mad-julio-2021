// 5- Crear un servidor de aplicaciones en el puerto que queramos para crear vuelos y que los vaya guardando en un archivo llamado 'flight.json'.
// 	- Esta operación se ejecutará cuando nuestro usuario nos solicite la información con el método POST al path '/flights', pasándonos la info en el body.
// 		* El body contendrá un JSON con la siguient info (origin, destination, outboundDate y inboundDate)
// 	- La operación añadirá al la lista de vuelos de un archivo 'flight.json' un vuelo con la información dada. El id lo generará sumando 1 al último id que tengamos en nuestro.
// 	- La operación debe validar los datos que introduce el usuario:
// 		* el origen tiene que ser un código IATA válido
// 		* el destino tiene que ser un código IATA válido
// 		* la fecha de salida tiene que ser posterior a la fecha y horas actuales
// 		* la fecha de destino tiene que ser posterior a la fecha de salida
// 	- Si alguno de los datos es erróneo retornaremos un statusCode 400 indicando en el mensaje cual es el atributo que no es valido: EJ: 'El atributo outboundDate es inválido'.

// Un código IATA es un código único que representa un aeropuerto a nivel mundial. Podéis obtener el listado de codigos IATA de aqui (https://gist.githubusercontent.com/tdreyno/4278655/raw/7b0762c09b519f40397e4c3e100b097d861f5588/airports.json)


​
import http from "http";
import fs from "fs";
import { YoutubeSearchedForSharp } from "@material-ui/icons";
​
let flights = [];
​
try {
  fs.accessSync("flights.json", fs.constants.F_OK); // comprobamos si el archivo existe
  // leo el archivo sincrono, paso a string el Buffer y 
  //lo parseo a objeto pàra guardarlo en una variable global
  flights = JSON.parse(fs.readFileSync('flights.json').toString()); 
} catch (err) {
  fs.writeFile("flights.json", "[]", err => {
      if(err) throw err;
  }); // Creamos el archivo si no existe como lista vacia
}
​
const validateFlight = (flight) => {
    // Esta función devuelve null si los datos son válidos, 
    // sino devuelve un string con el primer atributo que no es valido
​
    /**
     * 1- validar que tanto origin como destination existen en el array de aeropuetos
     * 2- validar que las condiciones de la fecha
     * 3- si todo okey devolver null, en cuanto una sea error devolver el nombre de ese atributo
     */
    // TODO: Esta validación es JS y os queda a vosotr@s ;)
    return null;
}
​
const generateNextId = () => {
    // me genera el siguiente identificador
    // devuelve el ultimo id del array de vuelos + 1
    const lastFlight = flights[flights.length-1];
    return lastFlight !== undefined ? lastFlight.id +1 : 1; // si no hay ultimo vuelo es que la lsita esta vacia, asi que empiezo en uno
}
​
const updateFlight = (flight) => {
    // actualiza en el archivo el vuelo de manera asyncrona
    flights.push(flight); // lo guardo en mi variable de memoria
    // sobreescribo todo el archivo con el nuevo array completo
    fs.writeFile('flights.json', JSON.stringify(flights), err => {
        if(err) throw err;
    } );
}
​
const s = http.createServer((req, res) => {
  // Función que se va a ejecutar cuando un cliente haga una peticion a mi servidor (TODAS)
  const reqUrl = new URL(req.url, `http://${req.headers.host}`); // genero el objeto URL con todas sus partes
  // solo se puede ejecutar si el metodo es POST, y el path es /flights
  if (req.method === "POST" && reqUrl.pathname === "/flights") {
    // Solo si se cumple esto mi servidor responde
    /**
     * 1- Obtener los datos del body
     * 2- Validar los datos (envio un 400 si no son validos)
     * 3- Escribir en el archivo los datos
     * 4- envio un 200 al usuario
     */
     /**
     * LEER EL BODY DE UNA REQUEST ES IGUAL QUE CUALQUIER STREAM READABLE 
     * (stdin o el objeto res del metodo http.createRequest())
     */
     let data = ""; // genero una variable donde voy concatenando lso datos parciales
     req.on("data", (chunk) => { 
       data += chunk; // cada dato parial lo concateno a mi variable final
     });
   
     req.on("end", () => {
       // ya tendre los datos de mi body para ser parseados
       const body = JSON.parse(data); // aqui ya tendré el body del usuario
       const validation = validateFlight(body); // validamos el body de la solicitud
       if(validation === null){
        // todo ok
        body.id = generateNextId(); // añado el id al vuelo
        updateFlight(body); // actualizo el vuelo
        res.statusCode = 201; // se ha creado correctamente
        res.end(`created`);
       }else{
            res.statusCode = 400;
            res.end(`El atributo ${validation} es inválido`);
       }
     });
  } else {
    res.statusCode = 405;
    res.end(
      `La información solicitada no está permitida ${req.method} ${reqUrl.pathname}`
    );
  }  
});
​
s.listen(6969, () => console.log("Server escuchando en el 6969"));



// Para verificar este ejercicio se debe ir al cliente (puede ser navegador, postman, pagina YoutubeSearchedForSharp.. etc) colocar la URL y hacer el request 