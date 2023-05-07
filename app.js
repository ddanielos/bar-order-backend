const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./app/routes/api');

require('dotenv').config()

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./db')

const PORT = process.env.PORT || 3001

/* app.get('/', (req, res) => {
  res.send('Hola, mundo!');
}); */

app.use('/api', apiRouter);

app.listen(PORT, ()=>{
  console.log('Servidor iniciado en el puerto', PORT);
});