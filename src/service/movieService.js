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

export const movieService = {
    getAllMovies,
    createMovie
}

function updateDB(movies) {
    fs.writeFile('./config/database.json', JSON.stringify(movies, null, 2))
}