"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = __importDefault(require("../../../middleware/auth"));
const multer_1 = require("../../../middleware/multer");
const importTitleRatings_1 = require("../controllers/importTitleRatings");
const loadTitleRatings_1 = require("../controllers/loadTitleRatings");
const loadTitleRating_1 = require("../controllers/loadTitleRating");
const app = (0, express_1.Router)();
app.post("/import", auth_1.default, multer_1.upload_ratings, importTitleRatings_1.importRatings);
app.get("/all", auth_1.default, loadTitleRatings_1.loadRatings);
app.get("/:id", auth_1.default, loadTitleRating_1.loadRating);
exports.default = app;
//# sourceMappingURL=ratings.routes.js.map