const express = require('express');
const app = express();
const port = 3000;
const cors = require("cors");
const fileUpload = require('express-fileupload');

app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/',
    createParentPath: true,
    abortOnLimit: true,
    limits: { fileSize: 5 * 1000 * 1024 * 1024 }, // Limitation des fichiers à 5Go
}))
app.use(cors());

const moviesRouter = require('./routes/movies')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api/movies', moviesRouter)

app.listen(port, () => {
    console.log(`Backend app listening at http://localhost:${port}`)
})
