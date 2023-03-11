const Profile = require('../models/about_model');
const Experience = require('../models/experience_model');
const Contact = require('../models/contact_model');
const Skill = require('../models/skill_model');


async function index(req, res, next) {
  const profiles = await Profile.find({});
  const experiences = await Experience.find({});
  const contacts = await Contact.find({});
  const skills = await Skill.find({});


  res.render('index', {
    title: 'Our CV2 - Skill',
    page: req.url,
    profile: profiles[0],
    experiences,
    contact: contacts[0], skills,
  });
}
module.exports = { index };
