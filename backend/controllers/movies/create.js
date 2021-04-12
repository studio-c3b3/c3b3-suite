module.exports = (req, res) => {
    console.log(req.files)
    if (!req.files) {
      return res.status(400).send('No files were uploaded.');
    }
    console.log(req.files)


    return res.send('Fine !')
}