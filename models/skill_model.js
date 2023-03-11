const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SkillSchema = new Schema({
  skillName: String,
  level: String,
  percent: String,
});

const SkillModel = mongoose.model('Skill', SkillSchema);
module.exports = SkillModel;
