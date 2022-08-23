"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_routes_1 = __importDefault(require("./app/modules/Users/routes/user.routes"));
const ratings_routes_1 = __importDefault(require("./app/modules/Ratings/routes/ratings.routes"));
const basics_routes_1 = __importDefault(require("./app/modules/Titles/routes/basics.routes"));
const route = (0, express_1.Router)();
route.use("/user", user_routes_1.default);
route.use("/ratings", ratings_routes_1.default);
route.use("/titles", basics_routes_1.default);
exports.default = route;
//# sourceMappingURL=routes.js.map