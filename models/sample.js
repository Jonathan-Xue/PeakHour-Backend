// Load Packages
var mongoose = require('mongoose');

// Define Schema
var SampleSchema = new mongoose.Schema({
    name: String
});

// Export the Mongoose model
module.exports = mongoose.model('Sample', SampleSchema);