import { Router } from "express";
import { castServer } from "../service/castService.js";

const castController = Router()

castController.get('/create', (req, res) => {
    res.render('createCast', {pageTitle: 'Create Cast'})
})

castController.post('/create', async (req, res) => {
    await castServer.createCast(req.body)
    res.redirect('/')
})

castController.get('/attach/:id', (req, res) => {
    const id = req.params.id
    res.render('castAttach', {pageTitle: 'Attach Cast'})
})

export default castController;