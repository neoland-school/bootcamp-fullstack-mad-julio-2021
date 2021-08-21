// 2- Crear un servidor de aplicaciones en el puerto 3101 que cuando el usuario solicite la información, devuelva un HTML con un H1 que diga Hola Mundo en color verde. 

import http from 'http' ;

const port = 3101; 

const server = http.createServer((req, res) => { 
     res.statusCode = 200
     res.setHeader('Content-Type', 'text/html')
     res.end('<h1 style="color:green">Hello, World!</h1>')
   
   })
   
   server.listen(port, () => { 
     console.log(`Servidor en el puerto ${port}`)
   })