import { Router } from 'express';
import { userService } from '../service/userService.js';
import { isAuth, isGuest } from '../middlewares/authMiddleware.js';

const userController = Router()

userController.get('/login', (req, res) => {
    res.render('login', {pageTitle: 'Login'})
})

userController.post('/login', async (req, res) => {
    const data = req.body
    try{
        
        const token = await userService.login(req.body)
        res.cookie('auth', token)
        res.redirect('/')
        
    }catch(err){
            res.render('login', {pageTitle: 'Login', error: err.message, data})
    }


})

userController.get('/register', (req, res) => {
    res.render('register', {pageTitle: 'Register'})
})

userController.post('/register', async (req, res) => {
    const data = req.body
    try {
        await userService.registerUser(data)
        res.redirect('/user/login')
    } catch (err) {
        let errorMessage = 'Registration failed'
        if (err.errors) {
            errorMessage = Object.values(err.errors).at(0).message
        } else if (err.message) {
            errorMessage = err.message
        }

        res.render('register', {pageTitle: 'Register', error: errorMessage, data})
    }
})

userController.get('/logout', (req, res) => {
    res.clearCookie('auth')
    res.redirect('/')
})



export default userController;