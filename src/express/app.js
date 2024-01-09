const express = require("express");
const categoryController = require("./controllers/category.js");
const difficultyController = require("./controllers/difficulty.js");
const questionController = require("./controllers/question.js");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api", categoryController, difficultyController, questionController);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to sample application." });
});

const PORT = process.env.PORT || 8090;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
