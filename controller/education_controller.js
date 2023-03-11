const Education = require('../models/education_model');

async function index(req, res, next) {
  const educations = await Education.find({});
  res.render('components/education', { title: 'Our CV2 - Education', page: req.url, educations });
}
module.exports = { index };
