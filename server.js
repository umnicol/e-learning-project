const mongodb = require('mongodb').MongoClient
const express = require('express')
const app = express()
app.use(express.json())
var port = 5502;

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));var bodyParser = require('body-parser');
 
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://e-learning-admin:e-learning-admin@e-learning.mkhehw2.mongodb.net/test')
.catch(error => console.log(error));

const nameSchema = new mongoose.Schema({ 
    name: String,
    password: String,
    email: String
});

const Name = mongoose.model('Name',nameSchema);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/addname", (req, res) => {
    var myData = new Name(req.body);
    myData.save()
      .then(item => {
        res.send("item saved to database");
      })
      .catch(err => {
        res.status(400).send("unable to save to database");
      });
  });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})