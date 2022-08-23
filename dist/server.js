"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3031;
app.use(express_1.default.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PATCH");
    res.header("Access-Control-Max-Age", "3600");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});
app.get("/", (req, res) => {
    res.status(200).json({ message: "Bem vindo ao Movie List" });
});
app.use(routes_1.default);
app.listen(port, () => {
    console.log("Server on na porta " + port);
});
//# sourceMappingURL=server.js.map