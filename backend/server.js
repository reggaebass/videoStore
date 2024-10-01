const express = require('express');
const movieRoutes = require('./movies/routes');
const app = express();
const port = 4000

app.use("/api/v1/movies", movieRoutes)

app.listen(port, () => { console.log(`Server running on port ${port}`)})