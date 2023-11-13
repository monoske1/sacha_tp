const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.get('/nouv', (req, res) => {
  res.send('Ca marche !!');
});

app.get('/utilisateur/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`Vous avez demandé l'utilisateur avec l'ID : ${userId}`);
});

function logIP(req, res, next) {
  const clientIP = req.ip;
  console.log(`Adresse IP de la source : ${clientIP}`);
  next();
}

app.use(logIP);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
