import fs from 'fs/promises'
import { v4 as uuid} from 'uuid';


async function getAllMovies () {
    const database = await fs.readFile('./config/database.json')
return JSON.parse(database)
}

async function createMovie(data) {
    const database = await fs.readFile('./config/database.json')
    const movies = JSON.parse(database)
    const newMovie = {
        "id": uuid(),
        "title": data.title,
        "category": data.category,
        "genre": data.genre,
        "director": data.director,
        "year": data.year,
        "imageURL": data.imageURL,
        "rating": data.rating,
        "description": data.description
    }
    movies.push(newMovie);
    updateDB(movies);
}

async function getMovieById(id) {
    const database = await fs.readFile('./config/database.json')
    const movies = JSON.parse(database)
    const result = movies.filter(movie => movie.id === id)
    return result
}

async function filterMoviesBySearch (params) {
    const database = await fs.readFile('./config/database.json');
    const movies = await JSON.parse(database);
    let result = movies.slice()

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

function updateDB(movies) {
    fs.writeFile('./config/database.json', JSON.stringify(movies, null, 2))
}