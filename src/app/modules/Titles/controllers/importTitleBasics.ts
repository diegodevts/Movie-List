import { HttpError } from "../../../errors/HttpError"
import { Request, Response } from "express"
import { ImportTitleBasicsService } from "../services/ImportTitleBasicsService"

export const importTitles = async (req: Request, res: Response) => {
    try {
        const { destination, filename } = req.file

        const titles = await ImportTitleBasicsService.import(
            destination,
            filename
        )
        return res
            .status(201)
            .send({ message: "Movies loaded!", code: 201, titles })
    } catch (error) {
        if (error instanceof HttpError) {
            return res.status(error.statusCode).json({
                statusCode: error.statusCode,
                message: error.message
            })
        }
    }
}
