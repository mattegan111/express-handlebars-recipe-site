//Loads the express module
const express = require('express');
//Creates our express server
const app = express();
const port = 3000;
//Loads the handlebars module
const handlebars = require('express-handlebars')
//Sets our app to use the handlebars engine
app.set('view engine', 'handlebars')
//Sets handlebars configurations (we will go through them later on)
app.engine('handlebars', handlebars.engine({
  layoutsDir: __dirname + '/views/layouts',
}))
//Serves static files (we need it to import a css file)
app.use(express.static('public'))
//Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
app.get('/', (req, res) => {
  res.render('main', {layout : 'index'});
})

//Makes the app listen to port 3000
app.listen(port, () => console.log(`App listening to port ${port}`));