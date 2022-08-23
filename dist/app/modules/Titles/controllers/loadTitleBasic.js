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
exports.loadTitle = void 0;
const HttpError_1 = require("../../../errors/HttpError");
const LoadTitleBasicService_1 = require("../services/LoadTitleBasicService");
const loadTitle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_id } = req.body;
        const { id } = req.params;
        if (!user_id)
            throw new HttpError_1.HttpError({
                message: "You aren't allowed to get this resource.",
                statusCode: 403
            });
        const ratings = yield LoadTitleBasicService_1.LoadTitleBasicService.load(+id);
        return res.json({ code: 200, ratings });
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
exports.loadTitle = loadTitle;
//# sourceMappingURL=loadTitleBasic.js.map