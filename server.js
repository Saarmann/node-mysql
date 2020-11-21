const express = require('express');
const dotenv = require('dotenv');
const weaponRoutes = require('./routes/weapon');
const errorController = require('./controllers/error');
const bodyParser = require('body-parser');

dotenv.config();
const app = express();

const port = process.env.PORT;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST');
  res.setHeader('Acces-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/weapons', weaponRoutes);

app.use(errorController.get404);

app.use(errorController.get500);

app.listen(port, () => console.log(`Listening on port ${port}`));
