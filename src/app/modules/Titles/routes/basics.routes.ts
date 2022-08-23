import { Router } from "express"
import auth from "../../../middleware/auth"
import { upload_titles } from "../../../middleware/multer"
import { importTitles } from "../controllers/importTitleBasics"
import { loadTitles } from "../controllers/loadTitleBasics"
import { loadTitle } from "../controllers/loadTitleBasic"
import { updateTitle } from "../controllers/updateTitleBasic"

const app = Router()

app.post("/import", auth, upload_titles, importTitles)
app.get("/all", auth, loadTitles)
app.get("/:id", auth, loadTitle)
app.put("/update/:id", auth, updateTitle)

export default app
