import User from '../../config/models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const JWT_SECRET = '38fd19e62ced8a976274ed6c77fcd42d'

async function login(data) {
    const user = await User.findOne({ email: data.email })

    if(!user){
        throw new Error('Invalid email or password')
    }

    let isPasswordValid = await bcrypt.compare(data.password, user.password)
    if(!isPasswordValid){
        throw new Error('Invalid email or password')
    }

    const payload = {
        id: user.id,
        email: user.email,
    }

    const token = jwt.sign(payload, JWT_SECRET, {expiresIn: '2h'} )
    return token
}

async function registerUser(data) {
    const email = data.email
    const password = data.password
    const rePass = data.rePass
    const emailPattern = /^[a-z]+@{1}[a-z]+\.{1}[a-z]{2,}/

    const user = {
        email: data.email,
        password: data.password
    }

    //tests if email is valid
    if(!emailPattern.test(email)){
        console.log('This email is invalid!')
        return
    }

    //tests if rePass matches password
    if(password !== rePass){
        console.log('Passwords does not match!')
        return
    }

    const createdUser = User.create(user)
    console.log('User successfuly created')
    return
}



export const userService = {
    registerUser,
    login
}