require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const apiRouter = require('./app/routes/api');

/*

require('dotenv').config()

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./db')

const PORT = process.env.PORT || 3001


app.listen(PORT, ()=>{
  console.log('Servidor iniciado en el puerto', PORT);
});
*/


const cors = require('cors');
// const routes = require('./routes')
const dbConnect = require('./app/config/database')
const port = process.env.PORT || 3000

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Routes


//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true}));

app.use('/api', apiRouter);

app.listen(port, () => {
  console.log('Servidor iniciado en el puerto', port)
})

dbConnect;
