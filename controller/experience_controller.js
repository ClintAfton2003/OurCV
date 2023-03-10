const Experience = require("../models/experience_model");

async function index(req, res, next) {
  const experiences = await Experience.find({});
  res.render("components/experience", {
    title: "Our CV2 - Experience",
    page: req.url,
    experiences,
  });
}
module.exports = { index };
