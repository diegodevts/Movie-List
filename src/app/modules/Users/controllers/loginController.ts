import { HttpError } from "../../../errors/HttpError"
import { Request, Response } from "express"
import { LoginService } from "../services/loginService"

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body
        const { name, token } = await LoginService.login(email, password)
        return res.status(201).json({
            message: `Welcome to Movie List, ${name}`,
            code: 200,
            token
        })
    } catch (error) {
        if (error instanceof HttpError) {
            return res.status(error.statusCode).json({
                statusCode: error.statusCode,
                message: error.message
            })
        }
    }
}
