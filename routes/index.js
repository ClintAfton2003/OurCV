var express = require('express');
var router = express.Router();

const homeController = require('../controller/home_controller');
const aboutController = require('../controller/about_controller');
const experienceController = require('../controller/experience_controller');
const contactController = require('../controller/contact_controller');
const skillController = require('../controller/skill_controller');

/* GET home page. */
router.get('/', homeController.index);
router.get('/about', aboutController.index);
router.get('/experience', experienceController.index);
router.get('/contact', contactController.index);
router.get('/skill', skillController.index);

module.exports = router;
