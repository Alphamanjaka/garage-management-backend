const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    categoryId: {type: String, require: false}
}, { timestamps: true });

module.exports = mongoose.model('Service', ServiceSchema);