const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const redis = require('redis')
const port = process.env.PORT || 8080
const app = express()

// this assumes that all your app files
// `src` directory relative to where your server.js is
app.use(express.static(__dirname + '/src'))

// body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, 'src', 'index.html'))
})

app.listen(port)
console.log("Server started on port " + port)
