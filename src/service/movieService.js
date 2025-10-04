import fs from 'fs/promises'


async function getAllMovies () {
    const database = await fs.readFile('./config/database.json')
return JSON.parse(database)
}

// async function getMovieByID(id) {
//     const database = await fs.readFile('./config/database.json')    

// }

export const movieService = {
    getAllMovies
}