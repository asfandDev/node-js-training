const express = require('express');
const cors = require('cors');
const user = require('./user.controller')
const { database } = require('./db');
require('dotenv').config();

const app = express();
const PORT = 5000;
const corsOptions = {
  origin: '*'
};

//databse connection
database.connectDatabase();

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/v1/users', user);

//The 404 Route (ALWAYS Keep this as the last route)
app.all('*', function(req, res){
  res.send('route not exist', 404);
});

app.listen(PORT, () => {
  console.info(`listening on port:  ${PORT}`);
});
