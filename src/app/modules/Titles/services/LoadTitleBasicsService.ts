import { Rating } from "@prisma/client"
import prisma from "../../../database/prismaClient"

export class LoadTitleBasicsService {
    static async load(skip: number, take: number) {
        const basics = await prisma.title.findMany({
            take: take,
            skip: skip
        })
        const totalTitles: number = await prisma.title.count()
        const pageCalc = Math.floor(skip / take + 1)

        return {
            basics,
            currentPage: pageCalc,
            skippedItems: skip,
            numberOfPages: Math.round(totalTitles / 10)
        }
    }
}
