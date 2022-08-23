import { Router } from "express"
import { createUser } from "../controllers/createUserController"
import { login } from "../controllers/loginController"

const app = Router()

app.post("/register", createUser)
app.post("/login", login)

export default app
