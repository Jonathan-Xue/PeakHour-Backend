// Load Packages
var mongoose = require('mongoose');

// Define Schema
var UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: false},
    favorites: {type: [mongoose.Types.ObjectId], default: []},
    orders: {type: [mongoose.Types.ObjectId], default: []}
});

// Export the Mongoose model
module.exports = mongoose.model('User', UserSchema);