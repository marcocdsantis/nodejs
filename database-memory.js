import { randomUUID } from "node:crypto"
export class DatabaseMemory {
    #videos = new Map()

    // SET, array que não aceita valores duplicados
    // MAP, tipo de array

    list(search) {
        return Array.from(this.#videos.entries()).map((videoArray) => {
            const id = videoArray[0]
            const data = videoArray[1]

            return {
                id,
                ...data,//spreadPopulator
            }
        })
            .filter(video => {
                if (search) {
                    return video.title.includes(search)
                }
                else
                    return true
            })
    }

    create(video) {
        const videoID = randomUUID()

        //unique universal ID

        this.#videos.set(videoID, video)
    }

    update(id, video) {
        this.#videos.set(video)
    }

    delete(id) {
        this.#videos.delete(id)
    }
}