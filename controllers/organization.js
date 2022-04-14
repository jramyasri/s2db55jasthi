var organization = require('../models/organization');
// List of all Organization 
exports.organization_list = async function (req, res) {
    try {
        theOrganizations = await organization.find();
        res.send(theOrganizations);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific Organization
exports.organization_info = function (req, res) {
    res.send('NOT IMPLEMENTED: organization detail: ' + req.params.id);
};
// Handle Organization create on POST.
exports.organization_create_post = async function (req, res) {
    console.log(req.body)
    let document = new organization();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    document.name = req.body.name;
    document.type = req.body.type;
    document.noofbranches = req.body.noofbranches;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Organization delete form on DELETE.
exports.organization_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: organization delete DELETE ' + req.params.id);
};
// Handle Organization update form on PUT.
exports.organization_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: organization update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.organization_view_all = async function (req, res) {
    try {
        theOrganizations = await organization.find();
        res.render('organization', { title: 'organization Search Results', results: theorganizations });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};