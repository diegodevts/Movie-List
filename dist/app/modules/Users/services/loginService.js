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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
const prismaClient_1 = __importDefault(require("../../../database/prismaClient"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const HttpError_1 = require("../../../errors/HttpError");
const jwt = __importStar(require("jsonwebtoken"));
class LoginService {
    static login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const hasUser = yield prismaClient_1.default.user.findUnique({ where: { email } });
            const secret = process.env.SECRET;
            if (!hasUser || hasUser == null)
                throw new HttpError_1.HttpError({
                    message: "This email is incorrect or doesn't exists.",
                    statusCode: 404
                });
            const decrypt_pass = bcrypt_1.default.compareSync(password, hasUser.password);
            if (!decrypt_pass) {
                throw new HttpError_1.HttpError({
                    message: "Password is incorrect!",
                    statusCode: 403
                });
            }
            const token = jwt.sign({ id: hasUser.id }, secret, { expiresIn: "1h" });
            return { name: hasUser.name, token: token };
        });
    }
}
exports.LoginService = LoginService;
//# sourceMappingURL=loginService.js.map