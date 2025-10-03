import express from 'express'
import handlebars from 'express-handlebars'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

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
app.get('/', (req, res) => {
    res.render('home')
    //TODO - display the home.html
})

app.get('/about', (req, res) => {
    res.send('About page')
    //TODO - render the about page.
})

app.get('/create', (req, res) => {
    res.send('Create page')
    //TODO - render the create page.
})

app.get('/details/:id', (req, res) => {
    res.send(`Details page for ID -> ${req.params.id}`)
    //TODO - render the details page with conditional data
})

app.all('/*splat', (req, res) => {
    res.send('Page not found')
    //TODO - render the 404 page
})