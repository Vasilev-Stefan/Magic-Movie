import { Router } from "express";

const castController = Router()

castController.get('/create', (req, res) => {
    res.render('createCast', {pageTitle: 'Create Cast'})
})

castController.get('/attach/:id', (req, res) => {
    const id = req.params.id
    res.render('castAttach', {pageTitle: 'Attach Cast'})
})

export default castController;