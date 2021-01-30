const Movies = require('../../models/Movies')

module.exports = (req, res) => {
    res.send(Movies.findAll())
}
