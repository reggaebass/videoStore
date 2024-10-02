const pool = require("../database");
const queries = require("./queries");

const getMovies= (req, res) => {
    pool.query(queries.getMovies, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
};

const getMoviesById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getMoviesById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const getMoviesByTitle = (req, res) => {
    const title = req.params.title;
    pool.query(queries.getMoviesByTitle, [title], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const checkoutMovie = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.checkoutMovie, [id], (error, results) => {
        if (error) throw error;
    })
};

const returnMovie = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.returnMovie, [id], (error, results) => {
        if (error) throw error;
    })
};

module.exports = {
    getMovies,
    getMoviesById,
    getMoviesByTitle,
    checkoutMovie,
    returnMovie,
}