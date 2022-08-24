import multer from "multer"

const [dir, currentDir] = __dirname.split("\\middleware")
const upload_ratings = multer({
    dest: dir + "\\movie_files\\ratings"
}).single("file")

const upload_titles = multer({
    dest: dir + "\\movie_files\\titles"
}).single("file")

export { upload_titles, upload_ratings }
