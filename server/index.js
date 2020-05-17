const express = require('express');
const Hotel = require('../database/index.js');
const path = require('path');

const app = express();
const port = 3005;

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/', (req, res) => {
  res.status(200).send('ready to go!');
});

app.get('/header/:id', (req, res) => {
  const id = req.params.id;
  Hotel.findOne({id})
    .then( hotel => {
      res.send(hotel);
    })
    .catch( err => {
      res.sendStatus(404);
    });
});

app.listen(port, () => console.log(`listening on port ${port}`));