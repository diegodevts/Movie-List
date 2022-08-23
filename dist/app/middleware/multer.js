"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload_ratings = exports.upload_titles = void 0;
const multer_1 = __importDefault(require("multer"));
const upload_ratings = (0, multer_1.default)({
    dest: "C:/Users/Diego/Desktop/movieList/src/app/movie_files/ratings"
}).single("file");
exports.upload_ratings = upload_ratings;
const upload_titles = (0, multer_1.default)({
    dest: "C:/Users/Diego/Desktop/movieList/src/app/movie_files/titles"
}).single("file");
exports.upload_titles = upload_titles;
//# sourceMappingURL=multer.js.map