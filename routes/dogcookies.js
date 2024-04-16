var express = require('express');
var passport =require('passport');

const dogcookies_controlers = require('../controllers/dogcookies');
var router = express.Router();
/* GET costumes */
router.get('/detail', dogcookies_controlers.dogcookies_view_one_Page);
router.get('/', dogcookies_controlers.dogcookies_view_all_Page);
//router.get('/create', dogcookies_controlers.dogcookies_create_Page);
//router.get('/update', dogcookies_controlers.dogcookies_update_Page);
//router.get('/delete', dogcookies_controlers.dogcookies_delete_Page);
//router.get('/update', dogcookies_controlers.dogcookies_update_Page);
const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    res.redirect("/login");
}
router.get('/create',secured, dogcookies_controlers.dogcookies_create_Page);
router.get('/delete',secured, dogcookies_controlers.dogcookies_delete_Page);
router.get('/update', secured, dogcookies_controlers.dogcookies_update_Page);
router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
    });
module.exports = router;
