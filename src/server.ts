import express, { NextFunction, Request, Response } from "express"
import route from "./routes"

const app = express()
const port = process.env.PORT || 3031

app.use(express.json())
app.use((req: Request, res: Response, next: NextFunction) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Methods",
        "POST, GET, OPTIONS, DELETE, PATCH"
    )
    res.header("Access-Control-Max-Age", "3600")
    res.header("Access-Control-Allow-Headers", "*")
    next()
})

app.get("/", (req, res) => {
    res.status(200).json({ message: "Bem vindo ao Movie List" })
})

app.use(route)

app.listen(port, () => {
    console.log("Server on na porta " + port)
})
