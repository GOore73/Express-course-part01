/*

En esta versión del ejemplo de ejs, en cadar router, se usa el método render y se hace un llamado a una vista en particular. 
Se introducen datos que viajan a la vista con el formato:

<%= dato %>

También se introduce la forma que se pueden generar plantillas que luego se añaden a cada vista, por ejemplo partes del html que nos interesa que si cambian (ej, un estilo) cambie en todas las vistas.

Una forma podría ser, crear una carpeta partials dentro de views y cada porción de código que se re-usa. Por ejemplo se crea un header.ejs y un footer.ejs. Para incluirlos dentro de los otros ejs, se usa la sintaxis de ejs que se recupera de su documentación para la opción include:


<%- include('partials/header'); %>
<h1><%= title %></h1>

<%- include('partials/footer'); %>

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