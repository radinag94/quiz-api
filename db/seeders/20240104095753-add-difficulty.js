const { difficulties } = require("../data");
const { tableEmpty } = require("../helpers");

module.exports = {
  async up(queryInterface) {
    return queryInterface.sequelize.transaction(async (t) => {
      const isTableEmpty = await tableEmpty("Difficulty", queryInterface, t);

      if (isTableEmpty) {
        return queryInterface.bulkInsert("Difficulty", difficulties, {
          transaction: t,
        });
      }

      return true;
    });
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete("Difficulty", {});
  },
};
