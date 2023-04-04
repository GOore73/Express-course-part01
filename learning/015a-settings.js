const express = require('express');
const morgan = require('morgan');
const app = express();

/* Primero van los settings*/
//set establece el nombre de una variable, y su contrario, get, permitirá obtener el valor.
app.set('appName', 'Express Course');
app.set('port', 3000);

//cambiar comportomiento por defecto de express
app.set('case sensitive routing', true); //esta es una configuración con una palabra reservada en express
//no será entonces lo mismo usar una ruta que tenga /username que /UserName con case sensitive routing en true.

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


app.use((req,res)=>{
  res.status(404).send("La ruta no se ha encontrado");  
});

/* Iniciar server */
app.listen(app.get('port'));
console.log(`Server ${app.get('appName')} on port ${app.get('port')}`);