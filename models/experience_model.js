const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExperienceSchema = new Schema({
  job: String,
  company: String,
  startDay: String,
  endDay: String,
  description: String,
});

const ExperienceModel = mongoose.model('Experience', ExperienceSchema);
module.exports = ExperienceModel;
