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
exports.importRatings = void 0;
const HttpError_1 = require("../../../errors/HttpError");
const ImportTitleRatingsService_1 = require("../services/ImportTitleRatingsService");
const importRatings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { destination, filename } = req.file;
        const { user_id } = req.body.user_id;
        if (!user_id)
            throw new HttpError_1.HttpError({
                message: "You aren't allowed to get this resource.",
                statusCode: 403
            });
        const ratings = yield ImportTitleRatingsService_1.ImportTitleRatingsService.import(destination, filename);
        return res
            .status(201)
            .json({ message: "Movies ratings loaded!", code: 201, ratings });
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
exports.importRatings = importRatings;
//# sourceMappingURL=importTitleRatings.js.map