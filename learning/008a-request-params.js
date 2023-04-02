const express = require('express');
const app = express();

//lo que viene luego de los : son los parámetros
app.get('/hello/:user', (req, res)=>{
  console.log(req.params);
  res.send(`Hello, ${req.params.user}`);
});

app.get('/add/:x/:y', (req, res)=>{
  const {x, y} = req.params;
  const result = parseInt(x) + parseInt(y);
  res.send(`Result, ${result}`);
});

app.get('/users/:username/photo', (req, res)=>{
  if(req.params.username === "german") {
    res.sendFile('/images/computer.png', {
      root: './'
    })
  }
  else {
    res.send("El usuario no es el esperado");
  }
})

app.get('/nombre/:nombre/age/:age', (req, res)=>{
  res.send(`El usuario ${req.params.nombre} tiene ${req.params.age}`)
})

app.use((req,res)=>{
  res.status(404).send("La ruta no se ha encontrado");  
});

app.listen(3000);
console.log(`Server on port ${3000}`);
