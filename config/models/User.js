import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        match: [/@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/, 'This email is invalid'],
        minLength: [10, 'Email is too short'] 
    },
    password: {
        type: String,
        match: [/[a-zA-Z0-9]+/, 'Invalid characters in password'],
        minLength: [6, 'Password should be atleast 6 charachers long']
    }
})

userSchema.pre('save', async function () {
    this.password = await bcrypt.hash(this.password, 10)
})


const User = mongoose.model('User', userSchema)

export default User