import { Router } from 'express';
import { userService } from '../service/userService.js';
import { isAuth, isGuest } from '../middlewares/authMiddleware.js';

const userController = Router()

userController.get('/login', (req, res) => {
    res.render('login', {pageTitle: 'Login'})
})

userController.post('/login', async (req, res) => {
    const token = await userService.login(req.body)

    res.cookie('auth', token)

    res.redirect('/')
})

userController.get('/register', isGuest, (req, res) => {
    res.render('register', {pageTitle: 'Register'})
})

userController.post('/register', isGuest, async (req, res) => {
    const data = req.body
    userService.registerUser(data)
    res.redirect('/user/login')
})

userController.get('/logout', (req, res) => {
    res.clearCookie('auth')
    res.redirect('/')
})



export default userController;