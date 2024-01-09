const { db } = require("../../express/db/index");
exports.findAll = async (req, res) => {
  try {
    const categories = await db.Category.findAll({ order: ["name"] });

    return res
      .status(200)
      .json({
        result: categories.map((item) => item.get({ plain: true })),
        errors: [],
      });
  } catch (error) {
    return res.status(500).json({ result: null, errors: [error.message] });
  }
};
