const express = require('express');
//Creates our express server
const app = express();
const fs = require('fs')
// const routes = require('./routes')

//Server configuration
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
// app.use('/recipies', routes)

//Loads the handlebars module
const handlebars = require('express-handlebars')
//Sets our app to use the handlebars engine
app.set('view engine', 'hbs')
//Sets handlebars configurations (we will go through them later on)
app.engine('hbs', handlebars.engine({
  extname: 'hbs'
}))

//Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
app.get('/', (req, res) => {
  fs.readFile('./data.json','utf-8',(err,data)=>{
    if (err) return res.status(500).send(err.message)
    res.render('home',JSON.parse(data) );
  })
})

module.exports = app