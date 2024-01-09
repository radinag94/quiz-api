const { Router } = require("express");
const difficultyService = require("../service/difficultyService");
const router = Router();

router.get("/difficulties", difficultyService.findAll);

module.exports = router;
