import prisma from "../../../database/prismaClient"
import { HttpError } from "../../../errors/HttpError"
import * as bcrypt from "bcrypt"
import { ViaCEP } from "viacep"

export class CreateUserService {
    static async save(user: any) {
        const viacep = new ViaCEP()
        const hasUser = await prisma.user.findUnique({
            where: { email: user.email }
        })

        if (hasUser)
            throw new HttpError({
                message: "User already exists",
                statusCode: 409
            })

        const user_address = await viacep.cep(user.cep)

        user.password = bcrypt.hashSync(user.password, 10)
        const createUser = await prisma.user.create({
            data: {
                name: user.name,
                birth: user.birth,
                email: user.email,
                password: user.password,
                number: user.number,
                address: user_address.logradouro,
                complement: user_address.complemento,
                district: user_address.bairro,
                city: user_address.localidade,
                state: user_address.uf
            }
        })

        delete createUser.id
        delete createUser.password
        return createUser
    }
}
