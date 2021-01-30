const express = require('express')
const app = express()
const port = 3000

const moviesRouter = require('./routes/movies')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/movies', moviesRouter)

app.listen(port, () => {
    console.log(`Backend app listening at http://localhost:${port}`)
})
