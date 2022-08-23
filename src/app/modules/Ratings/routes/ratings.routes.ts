import { Router } from "express"
import auth from "../../../middleware/auth"
import { upload_ratings } from "../../../middleware/multer"
import { importRatings } from "../controllers/importTitleRatings"
import { loadRatings } from "../controllers/loadTitleRatings"
import { loadRating } from "../controllers/loadTitleRating"

const app = Router()

app.post("/import", auth, upload_ratings, importRatings)
app.get("/all", auth, loadRatings)
app.get("/:id", auth, loadRating)

export default app
