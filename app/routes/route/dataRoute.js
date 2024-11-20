const express = require('express')
const router = express.Router();
const dataController = require('../../controller/dataController')
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

// http://localhost:5000/api/data/importexcel
router.post('/importexcel',upload.single('file'),dataController.importExcel)

module.exports = router