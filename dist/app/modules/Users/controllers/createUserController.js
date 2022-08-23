"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const HttpError_1 = require("../../../errors/HttpError");
const createUserService_1 = require("../services/createUserService");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield createUserService_1.CreateUserService.save(req.body);
        return res
            .status(201)
            .json({ message: "User registered!", code: 201, user });
    }
    catch (error) {
        if (error instanceof HttpError_1.HttpError) {
            return res.status(error.statusCode).json({
                statusCode: error.statusCode,
                message: error.message
            });
        }
    }
});
exports.createUser = createUser;
//# sourceMappingURL=createUserController.js.map