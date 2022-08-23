import multer from "multer"

const upload_ratings = multer({
    dest: "C:/Users/Diego/Desktop/movieList/src/app/movie_files/ratings"
}).single("file")

const upload_titles = multer({
    dest: "C:/Users/Diego/Desktop/movieList/src/app/movie_files/titles"
}).single("file")

export { upload_titles, upload_ratings }
