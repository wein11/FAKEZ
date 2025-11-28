const express = require('express');
const router = express.Router();
const beatsController = require('../controllers/beatsController');

router.get('/', beatsController.getAllBeats);
router.get('/:id', beatsController.getBeatById);

module.exports = router;
