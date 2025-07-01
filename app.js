import { fastify } from 'fastify';
//import { DatabaseMemory } from './database-memory.js'
import { DatabasePostgres } from './database-postgres.js';

const server = fastify();

//const database = new DatabaseMemory()
const database = new DatabasePostgres()

/*  GET, busca informacao
    POST, cria registro 
    PUT, alteracao
    DELETE, delete
    PATCH, altera info especifica do registro
*/
server.post('/videos', async(request, reply) => {
    const { title, description, duration } = request.body

    await database.create({
        title,//title: title,
        description,//description: description,
        duration,//duration: duration,
    })

    return reply.status(201).send();
})

server.get('/videos', async(request) => {
    const search = request.query.search

    console.log("Search = ", search)

    const videos = await database.list(search)

    return videos
})

server.put('/videos/:id', (request, reply) => { //:id = route parameter
    const videoId = request.params.id
    const { title, description, duration } = request.body

    database.update(videoId, {
        title,
        description,
        duration,
    })

    return reply.status(204).send()
})

server.delete('/videos/:id', (request, reply) => {
    const videoId = request.params.id

    database.delete(videoId)

    return reply.status(204).send()
})

server.listen({
    port: 3333,
})