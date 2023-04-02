const express = require('express');
const app = express();

// El middleware es una función cuya lógica se ejecuta antes que llegue a la ruta.

//Por esta función va a pasar antes de rutear
app.use((req, res, next)=>{
  console.log(`pasó por aquí por la ruta ${req.url} y método ${req.method}`);
  //podriá tener solo como argumentos req y res, y al ejecutar el programa, pasaría por esta función, pero se quedaría esperando, se muestra el console.log, pero en el navegador se queda esperando.

  //para eso es el parámetro next
  
  next();
})

app.get('/profile', (req, res)=>{
  res.send('profile page');
})

app.use((req,res)=>{
  res.status(404).send("La ruta no se ha encontrado");  
});

app.listen(3000);
console.log(`Server on port ${3000}`);