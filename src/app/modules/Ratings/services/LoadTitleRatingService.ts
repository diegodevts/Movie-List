import { Rating } from "@prisma/client"
import prisma from "../../../database/prismaClient"

export class LoadTitleRatingService {
    static async load(id: string) {
        const rating = await prisma.rating.findUnique({ where: { id: id } })

        return { rating }
    }
}
