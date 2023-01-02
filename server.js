const express = require('express')
const cors = require('cors')
const app = express()
var proxy = require('html2canvas-proxy');
const path = require('path');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json();
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(cors())
app.use('/', proxy());
require('dotenv').config()
const mysql = require('mysql2')
const connection = mysql.createConnection(process.env.DATABASE_URL)

// a sample usage shown. Change it and add your own
app.post('/add', (req, res) => {
  console.log(req.body);
connection.query('INSERT INTO `CDsS` (nameCard, lvl, rarity, power, damage, img, imageSize, clan , ability, bonus, x , y, prismatic) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)', [req.body.nameCard, req.body.lvl, req.body.rarity , req.body.power , req.body.damage , req.body.img , req.body.imageSize, req.body.clan, req.body.ability, req.body.bonus, req.body.x , req.body.y , req.body.prismatic],(error,
results) => {
   if (error) return res.json({ error: error });

   res.send(results)

   });
})

app.get('/show', (req, res) => {
  connection.query('SELECT * FROM CDsS', function (err, rows, fields) {
    if (err) throw err

    res.send(rows)
  })
})


const PORT = 5000;

app.listen(PORT, () => `Server is running on port ${PORT}`)
