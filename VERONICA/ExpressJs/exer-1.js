// 1- Objetivo: Entender el uso básico de un servidor express y recuperación de parámetros:

// Crear un servidor web con expressjs que nos salude de diferentes formas:

// - Query params: Crear un GET bajo la ruta '/greet' que reciba un query param que representa el nombre a saludar y devuelvea un JSON como el siguiente {"data": "Hello <Name>"}
// 	- EJ: http://localhost:<puerto>/greet?name=alex => {"data": "Hello alex"}

// - Body: Crear un POST bajo la ruta '/greet' que tenga un body JSON que representa el nombre a saludar y devuelvea un JSON como el siguiente {"data": "Hello <Name>"}
// 	- EJ: POST: http://localhost:<puerto>/greet   Body: {"name": "alex"} => {"data": "Hello alex"}

	
// - Body: Crear un GET bajo la ruta '/greet-cookie' que lea una cookie que representa el nombre a saludar y devuelvea un JSON como el siguiente {"data": "Hello <Name>"}
// 	- EJ: http://localhost:<puerto>/greet   Cookie: name=alex} => {"data": "Hello alex"}


const express = require('express') //Se importa express
const cookieParser = require('cookie-parser') //Para hacer con la cookie se debe instalar un paquete 
const app = express() //Se necesita una variable general
app.use(express.json()) //Para usar express
app.use(cookieParser()) //Para usar la cookie
const port = 3001; //Se crea la variable del puerto

app.get('/greet/:name', (req, res) => {
    
    res.send({
        "data": "Hello " + `${req.params.name}`
    })
});

// http://localhost:3001/greet?name=alex

app.get('/greet', (req, res) => {
    
    res.send({
        "data": "Hello " + `${req.query.name}`
    })
});

// http://localhost:3001/greet/alex

app.post('/greet', (req, res) => {

  
    res.send({
        "data": "Hello " + `${req.body.name}`
    })
});

// se coloca en el postman esto:

// {
//     "name" : "alex"
// }

// luego raw y colocar json


app.post('/greet-cookie', (req, res) => {
    
    res.send({
        "data": "Hello " + `${req.cookies.name}`,
        "edad" : req.cookies.edad
    })
});

// En la opción headers agrego una cookie
// en la key se coloca cookie
// en el value coloca clave y valor name=ori
// si son más de dos cookies se separan por punto y coma asi name=ori;edad=6

// y me pinta abajo el objeto con la respuesta


app.listen(port, () => {
    console.log(`Escuchando a mi servidor: http://localhost:${port}`)
  })









