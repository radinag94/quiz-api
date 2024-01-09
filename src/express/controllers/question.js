const { Router } = require("express");
const questionService = require("../service/questionService");
const router = Router();

router.get("/questions", questionService.findAll);

module.exports = router;
