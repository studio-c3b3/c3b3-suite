const express = require('express');
const app = express();
const port = 3000;
const cors = require("cors");
const fileUpload = require('express-fileupload');

const port = 3000

app.use(fileUpload())
app.use(cors());
  
const moviesRouter = require('./routes/movies')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api/movies', moviesRouter)

app.listen(port, () => {
    console.log(`Backend app listening at http://localhost:${port}`)
})
