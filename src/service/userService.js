import User from '../../config/models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const JWT_SECRET = 'secretMessaeg'

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

    //pass JWT token
    const token = generateJWT(createdUser)

    console.log('User successfuly created')
    return token
}

function generateJWT(user) {

    const payload = {
        id: user._id,
        email: user.email
    }

    const token = jwt.sign(payload, JWT_SECRET, {expiresIn: '1h'})

    return token;
}

function updatedNav() {

}

export const userService = {
    registerUser,
}