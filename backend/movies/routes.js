const { Router } = require("express");
const controller = require("./controller")

const router = Router();

router.get('/', controller.getMovies);
router.get('/:id', controller.getMoviesById);
router.get('/search/:title', controller.getMoviesByTitle);
router.patch('/checkout/:id', controller.checkoutMovie);
router.patch('/returns/:id', controller.returnMovie);


module.exports = router;