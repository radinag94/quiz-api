const { UUID, DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  const Question = sequelize.define(
    "Question",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUID,
        primaryKey: true,
      },
      type: DataTypes.STRING,
      difficultyId: DataTypes.UUID,
      categoryId: DataTypes.UUID,
      question: DataTypes.STRING,
      correctAnswer: DataTypes.STRING,
      incorrectAnswers: DataTypes.ARRAY(DataTypes.STRING),
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
    },

    {
      tableName: "Question",
      createdAt: "createdAt",
      updatedAt: "updatedAt",
      deletedAt: "deletedAt",
      paranoid: true,
      freezeTableName: true,
      timestamps: true,
    }
  );

  return Question;
};
