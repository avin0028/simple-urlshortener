const express = require("express");
const { Addurl, Geturl } = require("../Controllers/ApiControllers");
const router = express.Router();

router.get("/add", Addurl);
router.get("/:url", Geturl);

module.exports = router;
