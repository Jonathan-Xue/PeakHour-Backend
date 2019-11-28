// Load Packages
var mongoose = require('mongoose');

// Define Schema
var RestaurantSchema = new mongoose.Schema({
    name: {type: String, required: true},
    address: {type: String, required: true},
    rating: {type: Number, required: false, default: 0.0},
    menu: {},
    orders: [mongoose.Types.ObjectId],
    charity: {type: String, required: false, default: "PeakHour"},
    location: {type: {type: String, enum: ['Point'], required: true}, coordinates: {type: [Number], required: true}}
});

// Export the Mongoose model
module.exports = mongoose.model('Restaurant', RestaurantSchema);