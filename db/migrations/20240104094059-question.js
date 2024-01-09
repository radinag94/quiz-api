module.exports = {
  /**
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('sequelize')} Sequelize
   */
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("Question", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.fn("gen_random_uuid"),
        primaryKey: true,
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      difficultyId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: {
            tableName: "Difficulty",
            schema: "public",
          },
          key: "id",
        },
      },
      categoryId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: {
            tableName: "Category",
            schema: "public",
          },
          key: "id",
        },
      },
      question: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      correctAnswer: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      incorrectAnswers: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },

  /**
   * @param {import('sequelize').QueryInterface} queryInterface
   */
  async down(queryInterface) {
    return queryInterface.dropTable("Category");
  },
};
