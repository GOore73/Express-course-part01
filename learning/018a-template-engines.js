/*
Con esto es posible crear template y que múltiples páginas compartan una misma interfaz o datos en común.

El módulo que usaremos en ejs 
npm install ejs

a partir que está instalado express puede comenzar a utilizar el método render, que se usará en lugar de send, o sendfile por ejemplo. 

Dos configuraciones son necesarias para utilizar ejs.

1. Setear cuál es el motor de views que se está usando:
app.set('view engine', 'ejs');

2. Setear la carpeta donde están las vistas:

app.set('views', path.join(__dirname, '../src/views'));

*/

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const ejs = require('ejs');

const app = express();



/* settings*/
app.set('appName', 'Express Course');
app.set('port', 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'../src/views'));



// middleware
app.use(morgan('dev'));
app.use(express.json());

const HomeRoutes = require('../src/routes/home');
const UserRoutes = require('../src/routes/users');

/* Luego van las rutas */

app.use('/public-route', express.static(path.join(__dirname,'../src/public')));
app.use('/uploads', express.static(path.join(__dirname,'../src/uploads')));
app.use(HomeRoutes);
app.use(UserRoutes);


/* Iniciar server */
app.listen(app.get('port'));
console.log(`Server ${app.get('appName')} en puerto ${app.get('port')}`);