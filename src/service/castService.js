import Cast from "../../config/models/Cast.js";

async function createCast(data) {
    const createdCast = await Cast.create(data)
    console.log(createCast)
}

export const castServer = {
    createCast,
}