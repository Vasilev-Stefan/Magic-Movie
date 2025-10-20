import mongoose from 'mongoose'

const castSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        match: [/[a-zA-Z0-9\ ]+/, 'Invalid charachers in the name']
    },
    age: {
        type: Number,
        required: [true, 'Age is required'],
        min: [1, "The minimum age is 1"],
        max: [120, "The age can not be higher than 120"]},
    born: {
        type: String,
        required: [true, 'Born location is required'],
        minLength: [10, 'The born location must be atleast 10 charachers long'],
        match: [/[a-zA-Z0-9\ ]+/, 'Invalid charachers in the location']
    },
    nameInMovie: {
        type: String,
        required: [true, 'Name is movie is required'],
        minLength: [5, "The character's name must be atleast 5 characters long"]
    },
    castImage: {type: String, required: true, validate: {validator: function (value) {return /^(https?)/.test(value)}, message: props => `${props.value} is not a valid URL. It must start with "http://" or "https://".`}},
    movie: {type: mongoose.Types.ObjectId, ref: 'Movie'}
})


const Cast = mongoose.model('Cast', castSchema)

export default Cast