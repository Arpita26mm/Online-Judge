const Problem = require("../models/Problem-model");

const AllProblemsHomePage = async (req, res) => {
  try {
    const problems = await Problem.find();

    if (!problems || problems.length === 0) {
      return res.status(404).json({ message: "No problems found" });
    }
    return res.status(200).json(problems);
  } catch (error) {
    //next(error);
    res.status(500).json({ error: error.message });
  }
};
module.exports = { AllProblemsHomePage };
