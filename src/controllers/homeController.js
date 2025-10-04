import { Router } from "express";
import { movieService } from "../service/movieService.js";


const homeController = Router()

homeController.get('/', async (req, res) => {
    const movies = await movieService.getAllMovies()
    res.render('home', {content: movies})
})

homeController.get('/about', (req, res) => {
    res.render('about')
})



export default homeController;