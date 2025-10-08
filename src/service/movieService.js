import Movie from '../../config/models/Movie.js';


async function getAllMovies () {
    const database = await Movie.find({}).lean()
    return database
}

async function createMovie(data) {
    const createdMovie = Movie.create(data)
    console.log(createMovie)
}

async function getMovieById(id) {
    const movie = await Movie.findOne({_id: id}).lean()
    return movie
}

async function filterMoviesBySearch (params) {
    const database = await Movie.find({}).lean();
    let result = database.slice()

    if(params.title){
        result = result.filter(movie => movie.title.toLowerCase().includes(params.title.toLowerCase()))
    }

    if(params.genre){
        result = result.filter(movie => movie.genre.toLowerCase().includes(params.genre.toLowerCase()))
    }

    if(params.year){
        result = result.filter(movie => movie.year == params.year)
    }

    return result;
}

export const movieService = {
    getAllMovies,
    createMovie,
    getMovieById,
    filterMoviesBySearch
}