const express = require('express');
const morgan = require('morgan');
const app = express();


//el middleware siempre tiene un parámetro next y en eso se diferencia de un controlador común, pero también se puede usar next en un controlador común. 

//para este ejemplo se usará el middleware morgan, que es un logger (un registro de peticiones).

//npm i morgan
app.use(morgan('dev'));
//morgan en su documentación, tiene este parámetro que aquí le di dev, que determina la forma en que se visualizará por pantalla el registro de la petición (manda un console.log)

app.get('/profile', (req, res)=>{
  res.send('profile page');
});


app.use((req,res)=>{
  res.status(404).send("La ruta no se ha encontrado");  
});

app.listen(3000);
console.log(`Server on port ${3000}`);