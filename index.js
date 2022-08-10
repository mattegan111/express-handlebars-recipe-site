//Loads the express module
const app = require('./app');

const port = 3000;

//Makes the app listen to port 3000
app.listen(port, () => console.log(`App listening to port ${port}`));