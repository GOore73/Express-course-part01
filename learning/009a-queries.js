const express = require('express');
const app = express();

//los queries dentro de la url, vienen precedidos de un ? con & se van concatenando
// ej: http://localhost:3000/Hello?nombre=german&edad=20
app.get('/hello/', (req, res)=>{
  console.log(req.query);
  res.send(`Hello, ${req.query.nombre}, tienes ${req.query.edad}`);
});


// Otro ejemplo
app.get('/search', (req,res)=>{
  if(req.query.q === "js books") {
    res.send('Esta es la lista de libros para javascript');
  }
  else {
    res.send('Para esa búsqueda no existen libros');
  }
});

/*si en la url se repite el mismo nombre de parámetro, por ej
http://localhost:3000/Hello?nombre=german&nombre=mario&nombre=jose
el query toma un objeto con un componente nombre del tipo array con los valores [german,mario,jose]
y se puede recorrer o tratar con cualquiera de los métodos de arrays para encontrar una lógica como en el siguiente ejemplo
*/
app.use('/users', (req, res)=>{
    console.log(req.query);
    if(req.query.nombre.includes("german")) {
      res.send('En la lista está la persona buscada');
    } else {
      res.send('En la lista NO está la persona buscada');
    }
});


app.use((req,res)=>{
  res.status(404).send("La ruta no se ha encontrado");  
});

app.listen(3000);
console.log(`Server on port ${3000}`);