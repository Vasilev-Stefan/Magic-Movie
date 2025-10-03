import express from 'express'
import handlebars from 'express-handlebars'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import fs from 'fs/promises'

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


//Creating routes
app.get('/', async (req, res) => {
    const movies = await getAllMovies()
    res.render('home', {content: movies})
})

app.get('/about', (req, res) => {
    res.render('about')
    //TODO - render the about page.
})

app.get('/create', (req, res) => {
    res.render('create')
    //TODO - render the create page.
})

app.get('/details/:id', (req, res) => {
    res.render(`details`)
    //TODO - render the details page with conditional data
})

app.all('/*splat', (req, res) => {
    res.render('404')
    //TODO - render the 404 page
})

async function getAllMovies () {
    const database = await fs.readFile('./config/database.json')
    return JSON.parse(database)
}