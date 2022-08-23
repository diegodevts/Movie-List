"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = __importDefault(require("../../../middleware/auth"));
const multer_1 = require("../../../middleware/multer");
const importTitleBasics_1 = require("../controllers/importTitleBasics");
const loadTitleBasics_1 = require("../controllers/loadTitleBasics");
const loadTitleBasic_1 = require("../controllers/loadTitleBasic");
const updateTitleBasic_1 = require("../controllers/updateTitleBasic");
const app = (0, express_1.Router)();
app.post("/import", auth_1.default, multer_1.upload_titles, importTitleBasics_1.importTitles);
app.get("/all", auth_1.default, loadTitleBasics_1.loadTitles);
app.get("/:id", auth_1.default, loadTitleBasic_1.loadTitle);
app.put("/update/:id", auth_1.default, updateTitleBasic_1.updateTitle);
exports.default = app;
//# sourceMappingURL=basics.routes.js.map