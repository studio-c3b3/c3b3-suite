const uuid = require("uuid")

module.exports = async (req, res) => {
    console.log(req.files)
    if (!req.files || !req.files.file) {
      return res.status(400).send('No files were uploaded.');
    }
    console.log(req.files)
    if (!req.files.file.mimetype.startsWith('video/')){
      return res.status(400).send('Invalid format')
    }

    uuid.v4()
    const uploadPath = `${__dirname}/../../../movies/` + req.files.file.name;
    await req.files.file.mv(uploadPath)

    return res.send('Fine !')
}