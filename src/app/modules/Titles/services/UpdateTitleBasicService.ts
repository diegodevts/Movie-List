import { HttpError } from "../../../errors/HttpError"
import prisma from "../../../database/prismaClient"

export class UpdateTitleBasicService {
    static async update(id: number, data: any) {
        delete data.user_id
        const title = await prisma.title.findUnique({ where: { id: id } })

        if (!title) {
            throw new HttpError({
                message: "Title not found or doesn't exists",
                statusCode: 404
            })
        }

        const updatedTitle = await prisma.title.update({
            where: { id: id },
            data: data
        })

        return updatedTitle
    }
}
