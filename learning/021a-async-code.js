/*
Manejo de código que viene desde otro lado

se utilizará axios para realizar las peticiones externas.

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