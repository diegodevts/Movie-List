import { HttpError } from "../../../errors/HttpError"
import { Request, Response } from "express"
import { LoadTitleRatingService } from "../services/LoadTitleRatingService"

export const loadRating = async (req: Request, res: Response) => {
    try {
        const { user_id } = req.body
        const { id } = req.params

        if (!user_id)
            throw new HttpError({
                message: "You aren't allowed to get this resource.",
                statusCode: 403
            })

        const { rating } = await LoadTitleRatingService.load(id)

        return res.json({ statusCode: 200, rating })
    } catch (error) {
        if (error instanceof HttpError) {
            return res.status(error.statusCode).json({
                statusCode: error.statusCode,
                message: error.message
            })
        }
    }
}
