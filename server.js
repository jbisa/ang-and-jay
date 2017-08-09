const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'src/index.html'));
  res.sendFile(path.resolve(__dirname, 'src/client.min.js'));
  res.sendFile(path.resolve(__dirname, 'src/css/styles.css'));
});

app.listen(port);
console.log('Server started');
