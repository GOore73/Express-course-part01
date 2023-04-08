const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();


/* settings*/
app.set('appName', 'Express Course');
app.set('port', 3000);



// middleware
app.use(morgan('dev'));
app.use(express.json());

/*
Las rutas se comenzarán a hacar cada vez mas complejas y largas y se harán difíciles de mantener en un único código. 
Se estila entonces que las rutas se administren en un router, con consiste en uno o una serie de módulos que tienen la parte de código que administra las rutas. 
Como cualquier código se puede llamar desde el código principal, pero express tiene sus propios objetos y métodos para administrar las rutas. 
Se pueden por ejemplo generar las rutas de la administración de usuarios en una ruta users. js, o la homepage en una ruta home.js, todo dentro de una carpeta routes. 

Forma de uso. 
1. en cada router se llama a la función Router de express

const {Router} = require('express');
const router = Router();

router.get.....
router.get...

module.exports = router;


2. En el módulo principal, los uso como middlewares acoplándose a la aplicación principal.
const HomeRoutes = require ('./routes/home');
const UserRoutes = require ('/routes/home');

app.use(HomeRoutes);
app.use(UserRoutes);


 */


const HomeRoutes = require('../src/routes/home');
const UserRoutes = require('../src/routes/users');

/* Luego van las rutas */

app.use('/public-route', express.static(path.join(__dirname,'../src/public')));
app.use('/uploads', express.static(path.join(__dirname,'../src/uploads')));
app.use(HomeRoutes);
app.use(UserRoutes);


/* Iniciar server */
app.listen(app.get('port'));
console.log(`Server ${app.get('appName')} on port ${app.get('port')}`);