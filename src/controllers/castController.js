import { Router } from "express";

const castController = Router()

castController.get('/cast/create', (req, res) => {
    res.render('createCast', {pageTitle: 'Create Cast'})
})