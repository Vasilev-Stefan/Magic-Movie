import Movie from '../../config/models/Movie.js';
import mongoose from 'mongoose';


async function getAllMovies () {
    const database = await Movie.find({}).lean()
    return database
}

async function createMovie(data) {
    const createdMovie = Movie.create(data)
    console.log(createMovie)
}

async function getMovieById(id) {
    const movie = await Movie.findOne({_id: id}).populate('cast').lean()
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

async function addCast(id, data) {
    const movie = await Movie.findById(id)

    if(movie.cast.includes(data.cast)){
        console.log('This cast has been already added')
        return
    }

   const updatedMovie = await Movie.updateOne({_id: id}, {
    $push: {
        cast: data.cast
    }
   })
   return updatedMovie
}

export const movieService = {
    getAllMovies,
    createMovie,
    getMovieById,
    filterMoviesBySearch,
    addCast
}