1- Crear una aplicación nodejs que solicite la información de las ciudades de esta URL (https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json) y guarde en un archivo countries.json, las ciudades cuyo prefijo telefónico termina por 4.

2- Crear un servidor de aplicaciones en el puerto 3101 que cuando el usuario solicite la información, devuelva un HTML con un H1 que diga Hola Mundo en color verde. 

3- Crear un servidor de aplicaciones en un puerto que el usuario meta por argumento de entrada (3500 si no mete ninguno) y que cuando se haga una petición devuelva este JSON ({"data": "Hello World"})

4- Modificar el servidor del ejercicio anterior para que lea un parámetro de query llamado `format` cuyos valores pueden ser (JSON, TEXT, HTML). En función del valor del parámetro devuelva:
- HTML con un h1 que diga hello world
- JSON que pinta la misma información que en el ejercicio 3 (Opción por defecto si no se introduce parámetro)
- TEXT que devuelve el string 'Hello World'

 5- Crear un servidor de aplicaciones en el puerto que queramos para crear vuelos y que los vaya guardando en un archivo llamado 'flight.json'.
	- Esta operación se ejecutará cuando nuestro usuario nos solicite la información con el método POST al path '/flights', pasándonos la info en el body.
		* El body contendrá un JSON con la siguient info (origin, destination, outboundDate y inboundDate)
	- La operación añadirá al la lista de vuelos de un archivo 'flight.json' un vuelo con la información dada. El id lo generará sumando 1 al último id que tengamos en nuestro.
	- La operación debe validar los datos que introduce el usuario:
		* el origen tiene que ser un código IATA válido
		* el destino tiene que ser un código IATA válido
		* la fecha de salida tiene que ser posterior a la fecha y horas actuales
		* la fecha de destino tiene que ser posterior a la fecha de salida
	- Si alguno de los datos es erróneo retornaremos un statusCode 400 indicando en el mensaje cual es el atributo que no es valido: EJ: 'El atributo outboundDate es inválido'.

Un código IATA es un código único que representa un aeropuerto a nivel mundial. Podéis obtener el listado de codigos IATA de aqui (https://gist.githubusercontent.com/tdreyno/4278655/raw/7b0762c09b519f40397e4c3e100b097d861f5588/airports.json)