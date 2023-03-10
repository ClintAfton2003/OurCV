const Profile = require('../models/about_model');
const Experience = require('../models/experience_model');

async function index(req, res, next) {
  const profiles = await Profile.find({});
  const experiences = await Experience.find({});

  res.render('index', { title: 'Our CV2', page: req.url, profile: profiles[0], experiences });
}
module.exports = { index };
