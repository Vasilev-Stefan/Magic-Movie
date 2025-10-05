import { Router } from "express";
import { movieService } from "../service/movieService.js";

const movieController = Router();

movieController.get('/create', (req, res) => {
    res.render('create')
})

movieController.post('/create', (req, res) => {
    console.log(req.body)
    movieService.createMovie(req.body)
    res.redirect('/')
})

movieController.get('/details/:id', (req, res) => {
    res.render(`details`)
})

export default movieController;