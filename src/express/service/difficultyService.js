const { db } = require("../db/index");
exports.findAll = async (req, res) => {
  try {
    const difficulties = await db.Difficulty.findAll({ order: ["name"] });
    return res
      .status(200)
      .json({
        result: difficulties.map((item) => item.get({ plain: true })),
        errors: [],
      });
  } catch (error) {
    return res.status(500).json({ result: null, errors: [error.message] });
  }
};
