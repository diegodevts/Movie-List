import { HttpError } from "../../../errors/HttpError"
import { Request, Response } from "express"
import { CreateUserService } from "../services/createUserService"

export const createUser = async (req: Request, res: Response) => {
    try {
        const user = await CreateUserService.save(req.body)
        return res
            .status(201)
            .json({ message: "User registered!", code: 201, user })
    } catch (error) {
        if (error instanceof HttpError) {
            return res.status(error.statusCode).json({
                statusCode: error.statusCode,
                message: error.message
            })
        }
    }
}
