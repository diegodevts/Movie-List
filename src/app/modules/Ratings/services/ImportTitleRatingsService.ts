import { Rating } from "@prisma/client"
import prisma from "../../../database/prismaClient"

import fs from "fs"

export class ImportTitleRatingsService {
    static async import(destination: string, filename: string) {
        const filepath = `${destination}\\${filename}`

        const file = fs.readFileSync(filepath, "utf8").split("\n")

        file.shift()

        const ratings = file.map((value) => {
            return value.split("\t")
        })
        fs.unlinkSync(filepath)
        const ratingsObj: Omit<Rating, "id">[] = []

        for (let data of ratings) {
            ratingsObj.push({
                tconst: data[0],
                averageRating: parseFloat(data[1]),
                numVotes: parseInt(data[2])
            })
        }
        ratingsObj.pop()

        const importedRatings = await prisma.rating.createMany({
            data: ratingsObj
        })

        console.log("concluído!")
        return importedRatings
    }
}
