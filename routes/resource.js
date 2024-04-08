var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var dogcookies_controller = require('../controllers/dogcookies');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// dogcookies ROUTES ///
// POST request for creating a dogcookies.
router.post('/dogcookies', dogcookies_controller.dogcookies_create_post);
// DELETE request to delete dogcookies.
router.delete('/dogcookies/:id', dogcookies_controller.dogcookies_delete);
// PUT request to update dogcookies.
router.put('/dogcookies/:id', dogcookies_controller.dogcookies_update_put);
// GET request for one dogcookies.
router.get('/dogcookies/:id', dogcookies_controller.dogcookies_detail);
// GET request for list of all dogcookies items.
//router.get('/create', dogcookies_controller.dogcookies_create_Page);
router.get('/detail', dogcookies_controller.dogcookies_view_one_Page);
router.get('/dogcookies', dogcookies_controller.dogcookies_list);

module.exports = router;