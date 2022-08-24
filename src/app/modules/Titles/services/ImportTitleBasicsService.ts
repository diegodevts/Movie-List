import { Title } from "@prisma/client"
import prisma from "../../../database/prismaClient"
import fs from "fs"

export class ImportTitleBasicsService {
    static async import(destination: string, filename: string) {
        const filepath = `${destination}\\${filename}`
        const file = fs.readFileSync(filepath, "utf8").split("\n")
        file.shift()
        const titles = file.map((value) => {
            return value.split("\t")
        })

        fs.unlinkSync(filepath)
        const titlesObj: Omit<Title, "id">[] = []

        for (let data of titles) {
            titlesObj.push({
                tconst: data[0],
                titleType: data[1],
                primaryTitle: data[2],
                originalTitle: data[3],
                isAdult: data[4],
                startYear: data[5],
                endYear: data[6],
                runtimeMinutes: data[7],
                genres: data[8]
            })
        }

        titlesObj.pop()

        console.log(titlesObj[0])
        const titlesLoaded = await prisma.title
            .createMany({
                data: titlesObj
            })
            .catch((err) => console.log(err))

        console.log("concluído!")
        return titlesLoaded
    }
}
