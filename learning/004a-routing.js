const express = require('express');
const app = express();

//ruta original
app.get('/', (req, res)=>{
  res.send('Hello world');
});

//about
app.get('/about',(req,res)=>{
  res.send('About');  
}
);

//weather
app.get('/weather',(req,res)=>{
  res.send('weather!!');  
}
);

//manejador de cualquier otra ruta
app.use((req,res)=>{
    // res.send("La ruta no se ha encontrado");
    // send por defecto envía 200, es decir que el server ha respondido bien (en el monitor de Red, verás que se envía como un mensaje 200.

    res.status(404).send("La ruta no se ha encontrado");
    //este es un método alternativa que envía un 404 para interpretar mejor que se trata de un error.
    
});

app.listen(3000);
console.log(`Server on port ${3000}`);