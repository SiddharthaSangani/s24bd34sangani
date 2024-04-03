var express = require('express');
const dogcookies_controlers= require('../controllers/dogcookies');
var router = express.Router();
/* GET costumes */
router.get('/', dogcookies_controlers.dogcookies_view_all_Page );
module.exports = router;
