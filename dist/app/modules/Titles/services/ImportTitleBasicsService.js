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
exports.ImportTitleBasicsService = void 0;
const fs_1 = require("fs");
const stream_1 = require("stream");
const util_1 = require("util");
const fs_2 = __importDefault(require("fs"));
const csvtojson_1 = __importDefault(require("csvtojson"));
class ImportTitleBasicsService {
    static import(destination, filename) {
        return __awaiter(this, void 0, void 0, function* () {
            const filepath = `${destination}/${filename}`;
            yield readStream(filepath, destination);
            fs_2.default.unlinkSync(filepath);
            console.log("lendo arquivos");
            const readingFile = yield (0, csvtojson_1.default)()
                .fromFile(destination + "/my.csv")
                .then((jsonObj) => {
                console.log(jsonObj);
                return jsonObj;
                /**
                 * [
                 * 	{a:"1", b:"2", c:"3"},
                 * 	{a:"4", b:"5". c:"6"}
                 * ]
                 */
            });
            console.log("finished");
            return readingFile;
        });
    }
}
exports.ImportTitleBasicsService = ImportTitleBasicsService;
const readStream = function (filepath, destination) {
    return __awaiter(this, void 0, void 0, function* () {
        const pipelineAsync = (0, util_1.promisify)(stream_1.pipeline);
        (0, fs_1.createReadStream)(filepath)
            .setEncoding("utf8")
            .on("on", (fd) => __awaiter(this, void 0, void 0, function* () {
            const readableStream = new stream_1.Readable({
                read: function () {
                    const file = fd.toString().split("\n");
                    for (let i = 0; i < file.length; i++) {
                        let untable = file[i].split("\t");
                        const stringObj = {
                            tconst: untable[0],
                            titleType: untable[1],
                            primaryTitle: untable[2],
                            originalTitle: untable[3],
                            isAdult: untable[4],
                            startYear: untable[5],
                            endYear: untable[6],
                            runtimeMinutes: untable[7],
                            genres: untable[8]
                        };
                        const data = JSON.stringify(stringObj);
                        this.push(data);
                    }
                    this.push(null);
                }
            });
            const writableToCsv = new stream_1.Transform({
                transform: function (chunk, encodig, cb) {
                    const data = JSON.parse(chunk);
                    const result = `${data.tconst},${data.titleType},${data.primaryTitle},${data.originalTitle},${data.isAdult},${data.startYear},${data.endYear},${data.runtimeMinutes},${data.genres}\n`;
                    cb(null, result);
                }
            });
            const setHeader = new stream_1.Transform({
                transform: function (chunk, encoding, cb) {
                    cb(null, "tconst,titleType,primaryTitle,originalTitle,isAdult,startYear,endYear,runtimeMinutes,genres\n".concat(chunk));
                }
            });
            yield pipelineAsync(readableStream, writableToCsv, setHeader, (0, fs_1.createWriteStream)(destination + "/my.csv"));
        }));
    });
};
//# sourceMappingURL=ImportTitleBasicsService.js.map