var express = require('express');
const dogcookies_controlers= require('../controllers/dogcookies');
var router = express.Router();
/* GET costumes */
router.get('/detail', dogcookies_controlers.dogcookies_view_one_Page);
router.get('/', dogcookies_controlers.dogcookies_view_all_Page );
router.get('/create', dogcookies_controlers.dogcookies_create_Page);
router.get('/update', dogcookies_controlers.dogcookies_update_Page);
router.get('/delete', dogcookies_controlers.dogcookies_delete_Page);

module.exports = router;
