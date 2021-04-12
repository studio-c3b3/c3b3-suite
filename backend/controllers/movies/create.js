module.exports = (req, res) => {
    if (!req.file) {
      return res.status(400).send('No files were uploaded.');
    }
    console.log(req.file)


    return res.send('Fine !')
}