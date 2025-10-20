import { Router } from "express";
import { castServer } from "../service/castService.js";
import { movieService } from "../service/movieService.js";
import { isAuth } from "../middlewares/authMiddleware.js";

const castController = Router()

castController.get('/create', (req, res) => {
    res.render('createCast', {pageTitle: 'Create Cast'})
})

castController.post('/create', async (req, res) => {
    const data = req.body

    try {
        await castServer.createCast(req.body)
        res.redirect('/')
        
    } catch (err) {
        let errorMessage = 'Creating cast has failed'
        if (err.errors) {
            errorMessage = Object.values(err.errors).at(0).message
        } else if (err.message) {
            errorMessage = err.message
        }

        res.render('createCast', {pageTitle: 'Create Cast', error: errorMessage, data})
    }
})

castController.get('/attach/:id', async (req, res) => {
    const id = req.params.id
    const cast = await castServer.getAllCast()
    // console.log(cast)
    const movie = await movieService.getMovieById(id)
    res.render('castAttach', {pageTitle: 'Attach Cast', movie, cast})
})

castController.post('/attach/:id', async (req, res) => {
    const id = req.params.id
    const data = req.body
    const updatedMovie = movieService.addCast(id, data)
    res.redirect(`/cast/attach/${id}`)
})

export default castController;