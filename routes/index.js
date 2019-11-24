/*
 * Connect Endpoints
 */
var Sample = require('../models/sample');

module.exports = function (app, router) {
    app.use('/api', require('./home.js')(router));

    // Endpoint
    router.get('/sample_get_endpoint', (req, res) => {
        // TODO: Fill
        
    });

    router.post('/sample_put_endpoint', async(req, res) => {
        // TODO: Fill
    });

    router.put('/sample_put_endpoint/:id', async(req, res) => {
        // TODO: Fill
    });

    router.delete('/sample_delete_endpoint/:id', async(req, res) => {
        // TODO: Fill
    });
};