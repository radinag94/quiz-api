const { db } = require("../db/index");
const { validate } = require("uuid");
exports.findAll = async (req, res) => {
  try {
    const { categoryId, difficultyId } = req.query;

    if (!validate(categoryId) || !validate(difficultyId)) {
      return res.status(400).json({ result: null, errors: ["NOT A VALID ID"] });
    }

    const validCategory = await db.Category.findByPk(categoryId);
    const validDifficulty = await db.Difficulty.findByPk(difficultyId);

    if (!validCategory || !validDifficulty) {
      return res
        .status(400)
        .json({ result: null, errors: ["Invalid category or difficulty ID."] });
    }
    const questions = await db.Question.findAll({
      where: {
        categoryId,
        difficultyId,
      },
      order: db.sequelize.random(),
    });

    const shuffledQuestions = questions.map((question) => {
      const shuffledAnswers = [
        ...question.incorrectAnswers,
        question.correctAnswer,
      ];

      return {
        id: question.id,
        type: question.type,
        difficultyId: question.difficultyId,
        categoryId: question.categoryId,
        question: question.question,
        correctAnswer: question.correctAnswer,
        answers: shuffledAnswers.sort(() => Math.random() - 0.5),
        createdAt: question.createdAt,
        updatedAt: question.updatedAt,
        deletedAt: question.deletedAt,
      };
    });

    return res.status(200).json({ result: shuffledQuestions, errors: [] });
  } catch (error) {
    return res.status(500).json({ result: null, errors: [error.message] });
  }
};
