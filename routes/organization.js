var express = require('express');
const organization_controller=require('../controllers/organization')
var router = express.Router();

/* GET home page. */
router.get('/', organization_controller.organization_view_all);


module.exports = router;