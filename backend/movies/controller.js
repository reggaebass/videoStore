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

module.exports = {
    getMovies,
    getMoviesById,
}