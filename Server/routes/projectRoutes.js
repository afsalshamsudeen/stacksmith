const express = require('express');
const router = require(express.Router());
const {generateProject} = require('../controllers/projectController.js');

router.post('/generate', generateProject);

module.export = router;