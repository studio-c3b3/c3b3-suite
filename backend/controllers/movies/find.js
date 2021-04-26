const Movies = require('../../models/Movies')
const axios = require('axios')

module.exports = async (req, res) => {
    const apiResult = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=f89fe3eda337a8516a6cc14c4591094f&query=${req.query.text}&language=fr-FR&region=fr-FR`)
    res.send(apiResult.data)
}
