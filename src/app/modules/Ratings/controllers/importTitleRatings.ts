import { HttpError } from "../../../errors/HttpError"
import { Request, Response } from "express"
import { ImportTitleRatingsService } from "../services/ImportTitleRatingsService"

export const importRatings = async (req: Request, res: Response) => {
    try {
        const { destination, filename } = req.file
        const { user_id } = req.body.user_id

        if (!user_id)
            throw new HttpError({
                message: "You aren't allowed to get this resource.",
                statusCode: 403
            })
        const ratings = await ImportTitleRatingsService.import(
            destination,
            filename
        )
        return res
            .status(201)
            .json({ message: "Movies ratings loaded!", code: 201, ratings })
    } catch (error) {
        if (error instanceof HttpError) {
            return res.status(error.statusCode).json({
                statusCode: error.statusCode,
                message: error.message
            })
        }
    }
}
