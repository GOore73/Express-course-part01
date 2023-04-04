const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

/* Para enviar una archivo, se puede usar en la ruta, el método sentFile, pero si tengo que enviar múltiples archivos puede ser tedioso enviar uno a uno
Para ello usaremos un middleware de express que se encarga de servir contenido.
Este use static en general se coloca luego de todas las rutas, al final del código
*/

/* Primero van los settings*/
app.set('appName', 'Express Course');
app.set('port', 3000);


/* Luego van los middelwares*/
//middleware morgan
app.use(morgan('dev'));


/* Luego van las rutas */
app.get('/UserName', (req, res)=>{
  res.send("Username route");
});

app.get('/profile', (req, res)=>{
  res.send('profile page');
});


/* STATIC */
//static - conviete en púbica una carpeta
// app.use(express.static('./public'));
//Todo el contenido de esa carpeta puede ser accedido desde el navegador, aparte por defecto queda en la ruta inicial
//si escribo: http://localhost:3000/index.html lo muestra, al igual si escribo http://localhost:3000/index.css lo abre como texto. 

app.use('/public-route', express.static(path.join(__dirname,'../src/public')));
//esta es una alternativa que me evita cualquier conflicto a nivel de los nombres, voy a poder acceder al contenido de public, solo cuando se anteceda el prefijo que en este ejemplo se llama public-route:
//http://localhost:3000/public-route/index.css esta url abriría el archivo index.css en el navegador.

//para crear otra carpeta estática
app.use('/uploads', express.static(path.join(__dirname,'../src/uploads')));


/* Iniciar server */
app.listen(app.get('port'));
console.log(`Server ${app.get('appName')} on port ${app.get('port')}`);