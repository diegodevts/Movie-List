"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const createUserController_1 = require("../controllers/createUserController");
const loginController_1 = require("../controllers/loginController");
const app = (0, express_1.Router)();
app.post("/register", createUserController_1.createUser);
app.post("/login", loginController_1.login);
exports.default = app;
//# sourceMappingURL=user.routes.js.map