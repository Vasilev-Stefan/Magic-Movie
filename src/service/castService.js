import Cast from "../../config/models/Cast.js";

async function createCast(data) {
    const createdCast = await Cast.create(data)
    console.log(createCast)
}

async function getAllCast() {
    const cast = await Cast.find().lean()
    return cast
}

export const castServer = {
    createCast,
    getAllCast
}