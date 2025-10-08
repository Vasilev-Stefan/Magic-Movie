import mongoose from 'mongoose'

const movieSchema = new mongoose.Schema({
    title: {type: String, required: true},
    category: {type: String, required: true},
    genre: {type: String, required: true},
    director: {type: String, required: true},
    year: {type: Number, required: true, max: [2025, "The year can't be more than 2025"], min: [1888, "The first movie was created in the 1888"]},
    rating: {type: Number, required: true, max: [10, "The rating can't be higher than 10"], min: [1, "The rating can't be lower than 1"]},
    description: {type: String, required: true, maxLength: 200},
    imageURL: {type: String, required: true, validate: {validator: function (value) {return /^(https?)/.test(value)}, message: props => `${props.value} is not a valid URL. It must start with "http://" or "https://".`}},
    cast: [{type: mongoose.Types.ObjectId, ref: 'Cast'}]
})

const Movie = mongoose.model('Movie', movieSchema)

export default Movie