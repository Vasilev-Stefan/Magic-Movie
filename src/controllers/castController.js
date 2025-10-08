import { Router } from "express";
import { castServer } from "../service/castService.js";
import { movieService } from "../service/movieService.js";

const castController = Router()

castController.get('/create', (req, res) => {
    res.render('createCast', {pageTitle: 'Create Cast'})
})

castController.post('/create', async (req, res) => {
    await castServer.createCast(req.body)
    res.redirect('/')
})

castController.get('/attach/:id', async (req, res) => {
    const id = req.params.id
    const cast = await castServer.getAllCast()
    console.log(cast)
    const movie = await movieService.getMovieById(id)
    res.render('castAttach', {pageTitle: 'Attach Cast', movie, cast})
})

export default castController;