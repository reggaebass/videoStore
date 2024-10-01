const getMovies = "SELECT * FROM movies";
const getMoviesById = "SELECT * FROM movies WHERE ID = $1";


module.exports = {
    getMovies,
    getMoviesById,
}