const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  image: String,
  name: String,
  job: String,
  age: Number,
  email: String,
  skype: String,
  phone: String,
  address: String,
});

const ProfileModel = mongoose.model('Profile', ProfileSchema);
module.exports = ProfileModel;
