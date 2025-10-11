import { Router } from 'express';

const userController = Router()

userController.get('/login', (req, res) => {
    res.render('login', {pageTitle: 'Login'})
})

export default userController;