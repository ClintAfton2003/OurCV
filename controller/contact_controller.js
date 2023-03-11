const Contact = require('../models/contact_model');

async function index(req, res, next) {
  const contacts = await Contact.find({});
  res.render('components/contact', {
    title: 'Our CV2 - Contact',
    page: req.url,
    contact: contacts[0],
  });
}
module.exports = { index };
