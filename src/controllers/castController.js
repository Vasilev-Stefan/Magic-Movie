import { Router } from "express";

const castController = Router()

castController.get('/create', (req, res) => {
    res.render('createCast', {pageTitle: 'Create Cast'})
})

export default castController;