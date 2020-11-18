const express = require('express');
const dotenv = require('dotenv');
const weaponRoutes = require('./routes/weapon');

dotenv.config();
const app = express();

const port = process.env.PORT;

app.use('/weapons', weaponRoutes);

app.listen(port, () => console.log(`Listening on port ${port}`));
