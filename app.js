const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

// Utilities
const path = require("path");

// On set notre moteur de render ici EJS
// https://ejs.co/
app.set('view engine', 'ejs');

// Répertoire dynamique
app.use(express.static(path.join(__dirname)));

// Home
app.get('/', (req, res) => { res.render(path.join(__dirname, "views", "index")); })

server.listen(4000)