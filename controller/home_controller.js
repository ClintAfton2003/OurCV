const Profile = require('../models/about_model');

async function index(req, res, next) {
  const profiles = await Profile.find({});

  res.render('index', { title: 'Our CV2', page: req.url, profile: profiles[0] });
}
module.exports = { index };
