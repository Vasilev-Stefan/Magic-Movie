import User from '../../config/models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const JWT_SECRET = 'secretMessaeg'

async function registerUser(data) {
    const email = data.email
    const password = data.password
    const rePass = data.rePass
    const emailPattern = /^[a-z]+@{1}[a-z]+\.{1}[a-z]{2,}/

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

    //Generating hashed password
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt) 

    const user = {
        email,
        password: hashPassword
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

export const userService = {
    registerUser
}