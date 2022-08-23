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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTitleBasicService = void 0;
const HttpError_1 = require("../../../errors/HttpError");
const prismaClient_1 = __importDefault(require("../../../database/prismaClient"));
class UpdateTitleBasicService {
    static update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            delete data.user_id;
            const title = yield prismaClient_1.default.title.findUnique({ where: { id: id } });
            if (!title) {
                throw new HttpError_1.HttpError({
                    message: "Title not found or doesn't exists",
                    statusCode: 404
                });
            }
            const updatedTitle = yield prismaClient_1.default.title.update({
                where: { id: id },
                data: data
            });
            return updatedTitle;
        });
    }
}
exports.UpdateTitleBasicService = UpdateTitleBasicService;
//# sourceMappingURL=UpdateTitleBasicService.js.map