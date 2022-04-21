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
//exports.organization_delete = function (req, res) {
  //  res.send('NOT IMPLEMENTED: organization delete DELETE ' + req.params.id);
//};
// Handle Organization update form on PUT.
exports.organization_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: organization update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.organization_view_all = async function (req, res) {
    try {
        theOrganizations = await organization.find();
        res.render('organization', { title: 'organization Search Results', results: theOrganizations });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific organization.
exports.organization_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await organization.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };

   // Handle organization update form on PUT.
exports.organization_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await organization.findById( req.params.id)
 // Do updates of properties
 if(req.body.name)
 toUpdate.name = req.body.name;
 if(req.body.type) toUpdate.type = req.body.type;
 if(req.body.noofbranches) toUpdate.noofbranches = req.body.noofbranches;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};
// Handle organization delete on DELETE. 
exports.organization_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await organization.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
 
 // Handle a show one view with id specified by query 
exports.organization_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await organization.findById( req.query.id) 
        res.render('organizationdetail',  
{ title: 'organization Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for creating a organization. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.organization_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('organizationcreate', { title: 'organization Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for updating a organization. 
// query provides the id 
exports.organization_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await organization.findById(req.query.id) 
        res.render('organizationupdate', { title: 'organization Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.organization_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await organization.findById(req.query.id) 
        res.render('organizationdelete', { title: 'organization Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 