const express = require('express');
const app = express();

app.get('/profile', (req, res)=>{
  res.send('profile page');
})
//Si yo agrego un ruteo antes de los middlewares, se va a ejecutar sin problemas

// middleware 1:
app.use((req, res, next)=>{
  console.log(`pasó por aquí por la ruta ${req.url} y método ${req.method}`);
  //podriá tener solo como argumentos req y res, y al ejecutar el programa, pasaría por esta función, pero se quedaría esperando, se muestra el console.log, pero en el navegador se queda esperando.

  //para eso es el parámetro next
  next();
})

// los middleware se van "apilando", esta sería el 2do middle
// middleware 2:
app.use((req, res, next)=>{
  if(req.query.login === 'validuser'){
    next();
  }
  else {
    res.send('No autorizado');
  }
})

// esta ruta se va a ejecutar solo si pasa los middlewares
app.get('/dashboard', (req, res)=>{
  res.send('dashboard page');
})


app.use((req,res)=>{
  res.status(404).send("La ruta no se ha encontrado");  
});

app.listen(3000);
console.log(`Server on port ${3000}`);