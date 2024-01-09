const { categories } = require("../data");
const { tableEmpty } = require("../helpers");

module.exports = {
  async up(queryInterface) {
    return queryInterface.sequelize.transaction(async (t) => {
      const isTableEmpty = await tableEmpty("Category", queryInterface, t);

      if (isTableEmpty) {
        return queryInterface.bulkInsert("Category", categories, {
          transaction: t,
        });
      }

      return true;
    });
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete("Category", {});
  },
};
