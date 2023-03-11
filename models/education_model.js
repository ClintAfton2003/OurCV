const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EducationSchema = new Schema({
  certificate: String,
  school: String,
  startDay: String,
  endDay: String,
  description: String,
});

const EducationModel = mongoose.model('Education', EducationSchema);
module.exports = EducationModel;
