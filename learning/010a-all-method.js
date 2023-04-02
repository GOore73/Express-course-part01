const express = require('express');
const app = express();

// adicional a los verbos de http, express tiene un método all que sirve para cualquiera, se puede probar desde Thunder para cualquier método y en todos los casos devolverá 'server info'

app.all('/info', (req, res)=>{
  res.send(`server info, el método utilizado fue ${req.method}`);
  console.log(req.method);
});

app.use((req,res)=>{
  res.status(404).send("La ruta no se ha encontrado");  
});

app.listen(3000);
console.log(`Server on port ${3000}`);