import { Router } from "express";
import { movieService } from "../service/movieService.js";
import { isAuth } from "../middlewares/authMiddleware.js";

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
    const cast = movie.cast
    const rating = Math.trunc(Number(movie.rating))
    const ratingToDisplay = '&#x2605;'.repeat(rating)
    res.render(`details`, {movie, cast, ratingToDisplay, pageTitle: 'Details Page'})
})

movieController.get('/edit/:id', async (req, res) => {
    const id = req.params.id
    const movie = await movieService.getMovieById(id)
    // console.log(movie)
    res.render('edit', {movie, pageTitle: 'Edit Page'})
})

movieController.post('/edit/:id', async (req, res) => {
    const id = req.params.id
    const data = req.body
    await movieService.updateOne(id, data)

    res.redirect(`/movie/details/${id}`)
})

movieController.get('/delete/:id', async (req, res) => {
    const id = req.params.id
    await movieService.deleteMovie(id)
    res.redirect('/')
})

movieController.get('/search', async (req, res) => {
    const filter = req.query;
    const movies = await movieService.filterMoviesBySearch(filter);

    res.render('search', {content: movies, filter, pageTitle: 'Search'})

    
})

export default movieController;