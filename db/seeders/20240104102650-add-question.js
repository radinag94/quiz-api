const { questions } = require("../data");
const { tableEmpty } = require("../helpers");

module.exports = {
  async up(queryInterface) {
    return queryInterface.sequelize.transaction(async (t) => {
      const isTableEmpty = await tableEmpty("Question", queryInterface, t);

      if (isTableEmpty) {
        return queryInterface.bulkInsert("Question", questions, {
          transaction: t,
        });
      }

      return true;
    });
  },

  async down(queryInterface) {
    return queryInterface.bulkDelete("Question", {});
  },
};
