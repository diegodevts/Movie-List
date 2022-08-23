import { Router } from "express"
import userRoutes from "./app/modules/Users/routes/user.routes"
import titleRatings from "./app/modules/Ratings/routes/ratings.routes"
import titleBasics from "./app/modules/Titles/routes/basics.routes"

const route = Router()

route.use("/user", userRoutes)
route.use("/ratings", titleRatings)
route.use("/titles", titleBasics)

export default route
