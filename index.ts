import fs from 'fs';
import glob from "glob";

const lintFile = (filePath: string) => {
    fs.readFile(`./${filePath}`, "utf-8", (err, data) => {

        try {
            if (data && data?.includes("console.log(")) {
                throw new Error(`${process.cwd()}/${filePath} contains console.log() please remove it.`)
            }
        } catch (error) {
            console.error(error);
            process.exit(1)
        }
    })
}

let fileNames = []
glob("**/*.js", (err, files) => {
    files.forEach(element => {
        if (element.split("/")[0] === "src" || element.split("/")[0] === "app") {
            fileNames.push(element)
        }
    });
})

glob("**/*.ts", (err, files) => {
    files.forEach(element => {
        if (element.split("/")[0] === "src" || element.split("/")[0] === "app") {
            fileNames.push(element)
        }
    });
})

glob("**/*.tsx", (err, files) => {
    files.forEach(element => {
        if (element.split("/")[0] === "src" || element.split("/")[0] === "app") {
            fileNames.push(element)
        }
    });
})

glob("**/*.jsx", (err, files) => {
    files.forEach(element => {
        if (element.split("/")[0] === "src" || element.split("/")[0] === "app") {
            fileNames.push(element)
        }
    });
    for (let i of fileNames) {
        lintFile(i)
    }
})
