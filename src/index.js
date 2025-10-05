import express from 'express'
import handlebars from 'express-handlebars'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import homeController from './controllers/homeController.js'
import movieController from './controllers/movieController.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

//Creating the server with express
const app = express();
app.listen(5000, console.log('The server is listening on http://localhost:5000...'))

//Added view engine to the server
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    defaultLayout: 'main'
}))

//Setting the hbs to be the default view engine
app.set('view engine', 'hbs')

//Default css and image to be displayed
app.use(express.static(path.join(__dirname, 'static')))
app.use(express.urlencoded())

//Creating routes
app.use(homeController);
app.use('/movie', movieController)



app.all('/*splat', (req, res) => {
    res.render('404')
    //TODO - render the 404 page
})



