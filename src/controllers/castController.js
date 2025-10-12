import { Router } from "express";
import { castServer } from "../service/castService.js";
import { movieService } from "../service/movieService.js";
import { isAuth } from "../middlewares/authMiddleware.js";

const castController = Router()

castController.get('/create', isAuth, (req, res) => {
    res.render('createCast', {pageTitle: 'Create Cast'})
})

castController.post('/create', isAuth, async (req, res) => {
    await castServer.createCast(req.body)
    res.redirect('/')
})

castController.get('/attach/:id', isAuth, async (req, res) => {
    const id = req.params.id
    const cast = await castServer.getAllCast()
    // console.log(cast)
    const movie = await movieService.getMovieById(id)
    res.render('castAttach', {pageTitle: 'Attach Cast', movie, cast})
})

castController.post('/attach/:id', isAuth, async (req, res) => {
    const id = req.params.id
    const data = req.body
    const updatedMovie = movieService.addCast(id, data)
    res.redirect(`/cast/attach/${id}`)
})

export default castController;