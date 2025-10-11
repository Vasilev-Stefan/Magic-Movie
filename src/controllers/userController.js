import { Router } from 'express';

const userController = Router()

userController.get('/login', (req, res) => {
    res.render('login', {pageTitle: 'Login'})
})

userController.get('/register', (req, res) => {
    res.render('register', {pageTitle: 'Register'})
})

export default userController;