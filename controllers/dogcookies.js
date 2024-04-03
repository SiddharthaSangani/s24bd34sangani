var dogcookies = require('../models/dogcookies');
// List of all dogcookies
// List of all Costumes
exports.dogcookies_list = async function(req, res) {
    try{
    thedogcookies = await dogcookies.find();
    res.send(thedogcookies);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// VIEWS
// Handle a show all view
exports.dogcookies_view_all_Page = async function(req, res) {
    try{
    thedogcookies = await dogcookies.find();
    res.render('dogcookies', { title: 'dogcookies Search Results', results: thedogcookies });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };   
// for a specific dogcookies.
exports.dogcookies_detail = function(req, res) {
res.send('NOT IMPLEMENTED: dogcookies detail: ' + req.params.id);
};
// Handle dogcookies create on POST.
// Handle Costume create on POST.
exports.dogcookies_create_post = async function(req, res) {
    console.log(req.body)
    let document = new dogcookies();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.cookies_name = req.body.cookies_name;
    document.cost = req.body.cost;
    document.cookies_for = req.body.cookies_for;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    // Handle dogcookies delete from on DELETE.
exports.dogcookies_delete = function(req, res) {
res.send('NOT IMPLEMENTED: dogcookies delete DELETE ' + req.params.id);
};
// Handle dogcookies update form on PUT.
exports.dogcookies_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: dogcookies update PUT' + req.params.id);
};
