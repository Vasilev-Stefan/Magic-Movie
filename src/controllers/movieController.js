import { Router } from "express";
import { movieService } from "../service/movieService.js";
import { isAuth } from "../middlewares/authMiddleware.js";

const movieController = Router();

movieController.get('/create', (req, res) => {
    res.render('create', {pageTitle: 'Create Movie'})
})

movieController.post('/create', async (req, res) => {
    const data = req.body;

    try {
        await movieService.createMovie(req.body)
        res.redirect('/')
        
    } catch (err) {
        let errorMessage = 'Movie creation has failed'
        if(err.errors){
            errorMessage = Object.values(err.errors).at(0).message
        } else if(err.message){
            errorMessage = err.message
        }

        res.render('create', {pageTitle: 'Create Movie', error: errorMessage, data})
    }
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

    try {
        await movieService.updateOne(id, data)
        res.redirect(`/movie/details/${id}`)
        
    } catch (err) {
        let errorMessage = 'Editing a movie has failed'
        if(err.errors){
            errorMessage = Object.values(err.errors).at(0).message
        }else if(err.message){
            errorMessage = err.message
        }

        res.render('edit', {pageTitle: 'Edit Page', error: errorMessage, data})
    }

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