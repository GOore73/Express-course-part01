/* 

  HTTP VERBS: 

  GET, el cliente pide, hace una petición, el servidor va a retornar algo

  POST, el cliente envía datos, el server probablemente lo deba guardar

  PUT, el cliente está tratando de actualizar algo

  DELETE, el cliente está tratando de eliminar un dato en el server

  PATCH, similar al PUT, solo que PUT actualiza digamos todos los datos del objeto, PATCH es mas bien para una parte o algunos de esos datos.


*/

const express = require('express');
const app = express();

app.get('/products', (req,res)=>{
  res.send('lista de productos');
});

/* 
Thunder client, es una extensión en vscode similar a insomnia, para poder probar las rutas relacionadas con verbos distintos a GET, es decir con la ruta /products siempre desde el navegador se llamará a GET, para probar los otros métodos, se utiliza o bien insomnia o Thunder (ícono del rayito)
*/

app.post('/products', (req,res)=>{
  res.send('enviando un producto');
});

app.put('/products', (req,res)=>{
  res.send('cambiando un producto');
});

app.patch ('/products', (req,res)=>{
  res.send('cambiando una parte del producto');
});

app.delete ('/products', (req,res)=>{
  res.send('eliminando un producto');
});

app.listen(3000);
console.log(`Server on port ${3000}`);