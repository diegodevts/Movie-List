import { Rating, Title } from "@prisma/client"
import prisma from "../../../database/prismaClient"
import { createReadStream, createWriteStream } from "fs"
import { pipeline, Transform, Readable, Writable, Stream } from "stream"
import { promisify } from "util"
import fs from "fs"
import csv from "csvtojson"

export class ImportTitleBasicsService {
    static async import(destination: string, filename: string) {
        const filepath = `${destination}/${filename}`

        await readStream(filepath, destination)

        fs.unlinkSync(filepath)
        console.log("lendo arquivos")
        const readingFile = await csv()
            .fromFile(destination + "/my.csv")
            .then((jsonObj) => {
                console.log(jsonObj)
                return jsonObj
                /**
                 * [
                 * 	{a:"1", b:"2", c:"3"},
                 * 	{a:"4", b:"5". c:"6"}
                 * ]
                 */
            })
        console.log("finished")

        return readingFile
    }
}

const readStream = async function (filepath: string, destination: string) {
    const pipelineAsync = promisify(pipeline)

    createReadStream(filepath)
        .setEncoding("utf8")
        .on("on", async (fd) => {
            const readableStream = new Readable({
                read: function () {
                    const file = fd.toString().split("\n")

                    for (let i = 0; i < file.length; i++) {
                        let untable = file[i].split("\t")

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
                        }
                        const data = JSON.stringify(stringObj)
                        this.push(data)
                    }

                    this.push(null)
                }
            })

            const writableToCsv = new Transform({
                transform: function (chunk, encodig, cb) {
                    const data = JSON.parse(chunk)
                    const result = `${data.tconst},${data.titleType},${data.primaryTitle},${data.originalTitle},${data.isAdult},${data.startYear},${data.endYear},${data.runtimeMinutes},${data.genres}\n`
                    cb(null, result)
                }
            })

            const setHeader = new Transform({
                transform: function (chunk, encoding, cb) {
                    cb(
                        null,
                        "tconst,titleType,primaryTitle,originalTitle,isAdult,startYear,endYear,runtimeMinutes,genres\n".concat(
                            chunk
                        )
                    )
                }
            })

            await pipelineAsync(
                readableStream,
                writableToCsv,
                setHeader,
                createWriteStream(destination + "/my.csv")
            )
        })
}
