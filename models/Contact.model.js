const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
	name: {
		type: String,
		required: `Please Provide a name for your contact`,
	},
	number: {
		type: String,
		required: `Please Provide a number for your contact`,
	},
});

module.exports = mongoose.model('contact', ContactSchema);
