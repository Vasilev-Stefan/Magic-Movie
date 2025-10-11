import { Router } from 'express';
import { userService } from '../service/userService.js';

const userController = Router()

userController.get('/login', (req, res) => {
    res.render('login', {pageTitle: 'Login'})
})

userController.get('/register', (req, res) => {
    res.render('register', {pageTitle: 'Register'})
})

userController.post('/register', (req, res) => {
    const data = req.body
    const token = userService.registerUser(data)

    //attached JWT token to cookie
    res.cookie('Authorization', token)
    res.redirect('/')
})

export default userController;