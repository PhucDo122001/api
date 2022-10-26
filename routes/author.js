const authorController = require("../controllers/authorControllers");

const router = require("express").Router();

//add author
router.post("/", authorController.addAuthor);

module.exports = router;