import mongoose from 'mongoose'

const castSchema = mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, min: [1, "The minimum age must be 1"], max: [99, "The age can not be higher than 99"]},
    born: {type: String, required: true},
    nameInMovie: {type: String, required: true},
    castImage: {type: String, required: true, validate: {validator: function (value) {return /^(https?)/.test(value)}, message: props => `${props.value} is not a valid URL. It must start with "http://" or "https://".`}},
    movie: {type: mongoose.Types.ObjectId, ref: 'Movie'}
})


const Cast = mongoose.model('Cast', castSchema)

export default Cast