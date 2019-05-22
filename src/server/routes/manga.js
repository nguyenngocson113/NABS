const express = require('express');
const router = express.Router();
const FilesController = require('../controller/manga.js');

router.get('/gets', (req, res) => FilesController.getsManga(req, res));
router.get('/get', (req, res) => FilesController.getManga(req, res));
router.post('/remove', (req, res) => FilesController.removeItem(req, res));
router.post('/update', (req, res) => FilesController.updateItem(req, res));
router.post('/create', (req, res) => FilesController.createItem(req, res));

module.exports = router;
