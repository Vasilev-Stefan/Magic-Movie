import express from 'express'
import handlebars from 'express-handlebars'

//Creating the server with express
const app = express();
app.listen(5000, console.log('The server is listening on http://localhost:5000...'))

//Added view engine to the server
app.engine('hbs', handlebars.engine())

//Setting the hbs to be the default view engine
app.set('view engine', 'hbs')