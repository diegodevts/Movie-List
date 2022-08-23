import { HttpError } from "../../../errors/HttpError"
import { Request, Response } from "express"
import { LoadTitleRatingsService } from "../services/LoadTitleRatingsService"

export const loadRatings = async (req: Request, res: Response) => {
    try {
        const { user_id } = req.body
        const { skip, take } = req.query

        if (!user_id)
            throw new HttpError({
                message: "You aren't allowed to get this resource.",
                statusCode: 403
            })

        const ratings = await LoadTitleRatingsService.load(+skip, +take)

        return res.json({ code: 201, ratings })
    } catch (error) {
        if (error instanceof HttpError) {
            return res.status(error.statusCode).json({
                statusCode: error.statusCode,
                message: error.message
            })
        }
    }
}
