import { NextFunction, Request, Response } from "express"
import * as jwt from "jsonwebtoken"
import { TokenPayload } from "../config/types"
import { HttpError } from "../errors/HttpError"

export default function auth(req: Request, res: Response, next: NextFunction) {
    try {
        const { authorization } = req.headers

        if (!authorization || authorization === "Bearer") {
            throw new HttpError({
                message: "Token cannot be null!",
                statusCode: 403
            })
        }

        const [, token] = authorization.split(" ")

        const data = jwt.verify(token, process.env.SECRET)

        const { id } = data as TokenPayload
        req.body.user_id = id

        next()
    } catch (error) {
        if (error instanceof HttpError) {
            return res.status(error.statusCode).json({ message: error.message })
        }
        if (error.message == "jwt expired") {
            return res
                .status(401)
                .json({ message: "Session expired!", statusCode: 401 })
        }

        return res
            .status(500)
            .json({ message: "Internal Server Error", error: error })
    }
}
