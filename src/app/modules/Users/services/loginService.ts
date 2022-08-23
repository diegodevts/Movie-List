import prisma from "../../../database/prismaClient"
import bcrypt from "bcrypt"
import { HttpError } from "../../../errors/HttpError"
import * as jwt from "jsonwebtoken"

export class LoginService {
    static async login(email: string, password: string) {
        const hasUser = await prisma.user.findUnique({ where: { email } })
        const secret = process.env.SECRET
        if (!hasUser || hasUser == null)
            throw new HttpError({
                message: "This email is incorrect or doesn't exists.",
                statusCode: 404
            })

        const decrypt_pass = bcrypt.compareSync(password, hasUser.password)
        if (!decrypt_pass) {
            throw new HttpError({
                message: "Password is incorrect!",
                statusCode: 403
            })
        }

        const token = jwt.sign({ id: hasUser.id }, secret, { expiresIn: "1h" })

        return { name: hasUser.name, token: token }
    }
}
