import mongoose from 'mongoose'

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        minLength: [5, 'The title must be more than 4 charachers long'],
        match: [/[a-zA-Z0-9\ ]+/, 'Invalid charachers in the title of the movie']
    },
    category: {type: String, required: true},
    genre: {
        type: String,
        required: [true, 'Genre is required'],
        minLength: [5, 'The genre must be more than 4 charachers long'],
        match: [/[a-zA-Z0-9\ ]+/, 'Invalid charachers in the genre of the movie']
    },
    director: {
        type: String,
        required: [true, 'Director is required'],
        minLength: [5, "Director's name must be more than 4 charachers long"],
        match: [/[a-zA-Z0-9\ ]+/, "Invalid charachers in the director's name"]
    },
    year: {
        type: Number,
        required: [true, 'Year is required'],
        max: [2025, "The year can't be more than 2025"],
        min: [1900, "The year can't be lower than 1900"]
    },
    rating: {type: Number, required: [true, 'Rating is required'], max: [5, "The rating can't be higher than 5"], min: [1, "The rating can't be lower than 1"]},
    description: {
        type: String,
        required: [true, 'Description is required'],
        minLength: [20, 'The description must be atleast 20 charachers'],
        match: [/[a-zA-Z0-9\ ]+/, "Invalid charachers in the description"]
    },
    imageURL: {type: String, required: true, validate: {validator: function (value) {return /^(https?)/.test(value)}, message: props => `${props.value} is not a valid URL. It must start with "http://" or "https://".`}},
    cast: [{type: mongoose.Types.ObjectId, ref: 'Cast'}],
    creatorId: {type: mongoose.Types.ObjectId, ref: 'User'}
})

const Movie = mongoose.model('Movie', movieSchema)

export default Movie