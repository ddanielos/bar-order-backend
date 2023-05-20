require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./app/routes/api');

const cors = require('cors');
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
