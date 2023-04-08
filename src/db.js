/* Bases de datos.

driver: módulo de npm para conectarse a la bd
npm i mysql2

(maneja código asíncrono con promesas a diferencia de mysql -sin número-)


la conexión sera con un mysql en plantescale.com



*/

const mysql = require('mysql2/promise');

//los datos que se piden en el objeto son los que requiere la documentación de mysql2
//si bien podría realizar la instalación en mi computadora de mysql, los datos serían el localhost donde quede funcionando, previo haber levantado el servicio. 
async function connectDB(){ 
  const connection = await mysql.createConnection(
    {
    host: 'aws.connect.psdb.cloud',
    user: 'f0g6aceuc38mw6xw2haw',
    password: 'pscale_pw_Iw5y62MaroVj8MMOQsuXmdTzuam3X99kBCiJeYIDpxO',
    database:'expressdb',
    ssl: {
      rejectUnauthorized: false
    }
  });
  
  const result = await connection.query('SELECT 1+1 AS Result');
  console.log(result);
};

module.exports = connectDB;