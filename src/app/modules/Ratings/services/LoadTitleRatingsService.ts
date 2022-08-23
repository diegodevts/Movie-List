import { Rating } from "@prisma/client"
import prisma from "../../../database/prismaClient"

export class LoadTitleRatingsService {
    static async load(skip: number, take: number) {
        const ratings = await prisma.rating.findMany({
            take: take,
            skip: skip
        })
        const totalRatings: number = await prisma.rating.count()
        const pageCalc = Math.floor(skip / take + 1)

        return {
            ratings,
            currentPage: pageCalc,
            skippedItems: skip,
            numberOfPages: Math.round(totalRatings / 10)
        }
    }
}
