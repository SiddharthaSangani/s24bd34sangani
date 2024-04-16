var dogcookies = require('../models/dogcookies');
// List of all dogcookies
// List of all Costumes
exports.dogcookies_list = async function (req, res) {
    try {
        thedogcookies = await dogcookies.find();
        res.send(thedogcookies);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    } 
};
// VIEWS
// Handle a show all view
exports.dogcookies_view_all_Page = async function (req, res) {
    try {
        thedogcookies = await dogcookies.find();
        res.render('dogcookies', { title: 'dogcookies Search Results', results: thedogcookies });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific dogcookies.
exports.dogcookies_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await dogcookies.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// Handle dogcookies create on POST.
// Handle Costume create on POST.
exports.dogcookies_create_post = async function (req, res) {
    console.log(req.body)
    let document = new dogcookies();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.cookies_name = req.body.cookies_name;
    document.cost = req.body.cost;
    document.cookies_for = req.body.cookies_for;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle dogcookies delete from on DELETE.
// Handle dogcookies delete on DELETE.
exports.dogcookies_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await dogcookies.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};
// Handle dogcookies update form on PUT.
// Handle dogcookies update form on PUT.
exports.dogcookies_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await dogcookies.findById(req.params.id)
        // Do updates of properties
        if (req.body.cookies_name)
            toUpdate.cookies_name = req.body.cookies_name;
        if (req.body.cost) toUpdate.cost = req.body.cost;
        if (req.body.cookies_for) toUpdate.cookies_for = req.body.cookies_for;
        let result  = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
};
// Handle a show one view with id specified by query
exports.dogcookies_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await dogcookies.findById( req.query.id)
    res.render('dogcookiesdetail',
    { title: ' Dog cookies detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.dogcookies_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('dogcookiescreate', { title: 'dogcookies Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    // Handle building the view for updating a costume.
    // query provides the id
exports.dogcookies_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await dogcookies.findById(req.query.id)
    res.render('dogcookiesupdate', { title: 'dogcookies Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
// Handle a delete one view with id from query
exports.dogcookies_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await dogcookies.findById(req.query.id)
    res.render('dogcookiesdelete', { title: 'Dogcookies Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
