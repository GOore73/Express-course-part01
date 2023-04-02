const express = require('express');
const app = express();

/* los verbos tienen esta estructura:
 a) endpoint (la url)
 b) header (el tipo de datos, el estatus)
 c) body (los datos)
*/


//estas funciones permiten que express interprete texto y json que vengan en los request

app.use(express.text()); // para que interprete texto
app.use(express.json()); // para que interprete json
app.use(express.urlencoded({extended  : false})); // para que interprete forms

app.post('/user', (req, res)=>{
  console.log(req.body);  
  res.send("Nuevo usuario creado");
})


app.listen(3000);
console.log(`Server on port ${3000}`);
