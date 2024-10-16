const express = require("express");
const { db } = require("./config/database.js");
const bodyParser = require('body-parser')
const path = require('path')

const app = express();

// Set the view engine to EJS
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true}))
app.use('/',require('./routers/index.js'))
app.use(express.static('node_modules'))
app.use(express.static(path.join(__dirname,'public')))

// Start the server
app.listen(3186, (error) => {
    if (!error) {
      db()
      console.log("express connected at http://localhost:3186");
    } else {
      console.log("express not connected at http://localhost:3186");
    }
});


  