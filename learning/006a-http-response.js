/* 

*/

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('/miarchivo', (req, res) => {
  res.sendFile('/images/old-tv.png', {
    root: './',
  });
});

app.get('/isAlive', (req, res) => {
  res.sendStatus(204);
});

app.get('/user', (req, res) => {
  res.json({
    name: "mi nombre",
    lastname: "mi apellido",
    age: 49,
    points: [1, 2, 3],
    address: {
      city: "new york",
      street: "mi calle"
    }
  })
});



app.listen(3000);
console.log(`Server on port ${3000}`);