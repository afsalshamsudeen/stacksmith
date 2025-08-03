const fs = require('fs-extra')
const path = require('path')
const archiver = require('archiver')
const os = require('os')
const {createFileFromConfig} = require('../utils/templateUtils')


const generateReactProject = async (config) =>{
    const tempDir = path.join(os.tmpdir(), `generated-${Date.now()}`)
    await fs.ensureDir(tempDir);


    await createFileFromConfig(config, tempDir)
    const zipPath = `${tempDir}.zip`
    await zipDirectory(tempDir, zipPath)

    const zipBuffer = await fs.readFile(zipPath)

    await fs.remove(tempDir)
    await fs.remove(zipPath)

    return zipBuffer;
}

const zipDirectory = (sourceDir, outPath) =>{
    const archive = archiver('zip', {zlib: { level: 9}});
    const stream = fs.createWriteStream(outPath)

    return new Promise((resolve, reject) =>{
        archive.directory(sourceDir, false).on('error', reject).pipe(stream)
        stream.on('close', resolve)
        archive.finalize()
    })
}

module.exports={generateReactProject}