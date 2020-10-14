const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
});

//export model
const Contact = module.exports = mongoose.model('contact', contactSchema);

module.exports.get = function(callback, limit) {
    Contact.find(callback).limit(limit);
}