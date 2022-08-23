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
exports.ImportTitleRatingsService = void 0;
const prismaClient_1 = __importDefault(require("../../../database/prismaClient"));
const fs_1 = __importDefault(require("fs"));
class ImportTitleRatingsService {
    static import(filepath, filename) {
        return __awaiter(this, void 0, void 0, function* () {
            const file = fs_1.default
                .readFileSync(`${filepath}/${filename}`, "utf8")
                .split("\n");
            file.shift();
            const ratings = file.map((value) => {
                return value.split("\t");
            });
            fs_1.default.unlinkSync(`${filepath}/${filename}`);
            const ratingsObj = [];
            for (let data of ratings) {
                ratingsObj.push({
                    tconst: data[0],
                    averageRating: parseFloat(data[1]),
                    numVotes: parseInt(data[2])
                });
            }
            ratingsObj.pop();
            const importedRatings = yield prismaClient_1.default.rating.createMany({
                data: ratingsObj
            });
            console.log("concluído!");
            return importedRatings;
        });
    }
}
exports.ImportTitleRatingsService = ImportTitleRatingsService;
//# sourceMappingURL=ImportTitleRatingsService.js.map