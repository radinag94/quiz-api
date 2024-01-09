const { Router } = require("express");
const categoryService = require("../service/categoryService");
const router = Router();

router.get("/categories", categoryService.findAll);

module.exports = router;
