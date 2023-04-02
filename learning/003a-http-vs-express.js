/* 
Crear un server con node js vs hacerlo con express
*/


// -------------------- CON HTTP:
// const http = require('http');
// const fs = require('fs');
// const server = http.createServer((req,res)=> {
//   const read = fs.createReadStream('../curso/static/index.html');
//   read.pipe(res);
// });

// server.listen(3000);
// console.log(`Server on port ${3000}`);



// -------------------- CON EXPRESS
const express = require('express');
const app = express(); //esto es la simplificación de crear server.

app.get('/', (req,res)=>{
  res.sendFile('/static/index.html', {
    root: './'
  });
}); 
// el primer parámetro de get '/' indica que es la ruta inicial de la aplicación;
// en el .sendFile, el primer parámetro indica la ruta y en root se establece desde donde. root: './' indica que es relativa uno anterior desde donde estamos según nuestro ejemplo. Este parámetro podría ser también la variable de entorno: __dirname que da toda la ruta hasta el file js donde estamos ejecutando. 


app.listen(3000);
console.log(`Server on port ${3000}`);
console.log("dirname: ", __dirname);

