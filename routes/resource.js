var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var organization_controller = require('../controllers/organization');
// A little function to check if we have an authorized user and continue on

// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
req.session.returnTo = req.originalUrl;
res.redirect("/login");
}

/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);


/// car ROUTES ///
// POST request for creating a organization.
router.post('/organization', organization_controller.organization_create_post);
// DELETE request to delete organization.
router.delete('/organization/:id', organization_controller.organization_delete );
// PUT request to update organization.
router.put('/organization/:id', organization_controller.organization_update_put);
// GET request for one organization.
router.get('/organization/:id', organization_controller.organization_detail);
// GET request for list of all organizations.
router.get('/organization', organization_controller.organization_list);
// GET detail organization page // 
router.get('/detail', organization_controller.organization_view_one_Page);
/* GET create organization page */ 
router.get('/create',secured, organization_controller.organization_create_Page); 
/* GET create update page */ 
router.get('/update', secured,organization_controller.organization_update_Page);
/* GET delete organization page */ 
router.get('/delete',secured, organization_controller.organization_delete_Page); 
module.exports = router;
