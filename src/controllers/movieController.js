import { Router } from "express";
import { movieService } from "../service/movieService.js";

const movieController = Router();

movieController.get('/create', (req, res) => {
    res.render('create', {pageTitle: 'Create Movie'})
})

movieController.post('/create', async (req, res) => {
    console.log(req.body)
    await movieService.createMovie(req.body)
    res.redirect('/')
})

movieController.get('/details/:id', async (req, res) => {
    const id = req.params.id
    const movie = await movieService.getMovieById(id)
    const rating = Math.trunc(Number(movie.rating))
    const ratingToDisplay = '&#x2605;'.repeat(rating)
    res.render(`details`, {movie, ratingToDisplay, pageTitle: 'Details Page'})
})

movieController.get('/search', async (req, res) => {
    const filter = req.query;
    const movies = await movieService.filterMoviesBySearch(filter);

    res.render('search', {content: movies, filter, pageTitle: 'Search'})

    
})

export default movieController;