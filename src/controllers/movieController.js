import { Router } from "express";

const movieController = Router();

movieController.get('/create', (req, res) => {
    res.render('create')
})

movieController.get('/details/:id', (req, res) => {
    res.render(`details`)
})

export default movieController;