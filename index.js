const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({
  extended: true
}))

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/index.html")
});

app.post('/data', function(req, res) {
  var message = req.body.message;

  res.json({
    message: message,
    name: 'Abdullah',
  })
});

var namePar = ""
app.get('/greeting' + namePar, function(req, res) {
  var name = req.query.name;
  namePar = name;
  res.redirect("/greeting/" + namePar)
});

app.use("/greeting/" + namePar, function(req, res) {
  res.json({
    message: "Hello " + namePar
  })
})

app.listen(3000);
