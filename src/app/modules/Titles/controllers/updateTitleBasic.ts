import { HttpError } from "../../../errors/HttpError"
import { Request, Response } from "express"
import { UpdateTitleBasicService } from "../services/UpdateTitleBasicService"

export const updateTitle = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const user_id = req.body.user_id

        if (!user_id)
            throw new HttpError({
                message: "You aren't allowed to get this resource.",
                statusCode: 403
            })

        const data = req.body

        const title = await UpdateTitleBasicService.update(+id, data)

        return res.send({ message: "Movie updated!", code: 200, title })
    } catch (error) {
        if (error instanceof HttpError) {
            return res.status(error.statusCode).json({
                statusCode: error.statusCode,
                message: error.message
            })
        }
    }
}
