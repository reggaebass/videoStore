const { Router } = require("express");
const controller = require("./controller")

const router = Router();

router.get('/', controller.getMovies);
router.get('/:id', controller.getMoviesById);


module.exports = router;