const express = require("express");
const router = express.Router();
const path = require('path');
const GymController = require('../controllers/gymController');


router.get("/gyms", GymController.GetGyms); //SELECT ALLLLLL USERSZXC


module.exports = router;

