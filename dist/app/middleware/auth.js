"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = __importStar(require("jsonwebtoken"));
const HttpError_1 = require("../errors/HttpError");
function auth(req, res, next) {
    try {
        const { authorization } = req.headers;
        if (!authorization || authorization === "Bearer") {
            throw new HttpError_1.HttpError({
                message: "Token cannot be null!",
                statusCode: 403
            });
        }
        const [, token] = authorization.split(" ");
        const data = jwt.verify(token, process.env.SECRET);
        const { id } = data;
        req.body.user_id = id;
        next();
    }
    catch (error) {
        if (error instanceof HttpError_1.HttpError) {
            return res.status(error.statusCode).json({ message: error.message });
        }
        if (error.message == "jwt expired") {
            return res
                .status(401)
                .json({ message: "Sessão expirada!", statusCode: 401 });
        }
        return res
            .status(500)
            .json({ message: "Erro interno do servidor", error: error });
    }
}
exports.default = auth;
//# sourceMappingURL=auth.js.map