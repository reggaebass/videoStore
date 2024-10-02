const getMovies = "SELECT * FROM movies";
const getMoviesById = "SELECT * FROM movies WHERE ID = $1";
const checkoutMovie = "UPDATE movies SET stock = stock - 1 WHERE ID = $1";
const returnMovie = "UPDATE movies SET stock = stock + 1 WHERE ID = $1";
const getMoviesByTitle = "SELECT * FROM movies WHERE title LIKE '%'||$1||'%'";


module.exports = {
    getMovies,
    getMoviesById,
    checkoutMovie,
    getMoviesByTitle,
    returnMovie,
}