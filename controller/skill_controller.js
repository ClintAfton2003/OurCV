const Skill = require('../models/skill_model');

async function index(req, res, next) {
  const skills = await Skill.find({});

  res.render('components/skill', { title: 'Our CV2 - Skill', page: req.url, skills });
}
module.exports = { index };
