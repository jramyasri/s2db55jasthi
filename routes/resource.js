var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var organization_controller = require('../controllers/organization');

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
router.get('/organization/:id', organization_controller.organization_info);
// GET request for list of all organizations.
router.get('/organization', organization_controller.organization_list);
module.exports = router;