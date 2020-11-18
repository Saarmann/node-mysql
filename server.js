const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

const port = process.env.PORT;

const grocereis = [
  {
    id: 1,
    item: 'milk',
  },
  {
    id: 2,
    item: 'juice',
  },
];

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(port, () => console.log(`Listening on port ${port}`));
