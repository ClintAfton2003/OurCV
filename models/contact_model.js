const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  phoneNumber: String,
  email: String,
});

const ContactModel = mongoose.model('Contact', ContactSchema);
module.exports = ContactModel;
