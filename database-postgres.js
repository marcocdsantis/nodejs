import { randomUUID } from "node:crypto";
import { sql } from './db.js';
export class DatabasePostgres {
    async list(search) {
        let videos;

        if (search) {
            videos = await sql`select * from videos where title ilike "%${search}%"`;
        } else {
            videos = await sql`select * from videos`;
        }

        return videos;
    }

    async create(video) {
        const videoID = randomUUID()
        const { title, description, duration } = video

        await sql`inset into videos (id,title, description, duration) VALUES (${videoId}, ${titulo}, ${description}, ${duration}`
    }

    update(id, video) {
    }

    delete(id) {
    }
}