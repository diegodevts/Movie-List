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
exports.CreateUserService = void 0;
const prismaClient_1 = __importDefault(require("../../../database/prismaClient"));
const HttpError_1 = require("../../../errors/HttpError");
const bcrypt = __importStar(require("bcrypt"));
const viacep_1 = require("viacep");
class CreateUserService {
    static save(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const viacep = new viacep_1.ViaCEP();
            const hasUser = yield prismaClient_1.default.user.findUnique({
                where: { email: user.email }
            });
            if (hasUser)
                throw new HttpError_1.HttpError({
                    message: "User already exists",
                    statusCode: 409
                });
            const user_address = yield viacep.cep(user.cep);
            user.password = bcrypt.hashSync(user.password, 10);
            const createUser = yield prismaClient_1.default.user.create({
                data: {
                    name: user.name,
                    birth: user.birth,
                    email: user.email,
                    password: user.password,
                    number: user.number,
                    address: user_address.logradouro,
                    complement: user_address.complemento,
                    district: user_address.bairro,
                    city: user_address.localidade,
                    state: user_address.uf
                }
            });
            delete createUser.id;
            delete createUser.password;
            return createUser;
        });
    }
}
exports.CreateUserService = CreateUserService;
//# sourceMappingURL=createUserService.js.map