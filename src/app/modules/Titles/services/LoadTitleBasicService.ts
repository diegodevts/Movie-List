import { Rating } from "@prisma/client"
import prisma from "../../../database/prismaClient"

export class LoadTitleBasicService {
    static async load(id: number) {
        const basic = await prisma.title.findUnique({ where: { id: id } })

        return {
            basic
        }
    }
}
