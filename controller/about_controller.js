const Profile = require('../models/about_model');

async function index(req, res, next) {
  const profiles = await Profile.find({});
  res.render('components/about', { title: 'Our CV2 - About', page: req.url, profile: profiles[0] });
}
module.exports = { index };
