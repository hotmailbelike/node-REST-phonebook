const express = require('express');
const router = express.Router();

const Contact = require('../models/Contact.model');

router.get('/', async (req, res) => {
	try {
		const contact = Contact.find();
		res.json(contact);
	} catch (error) {
		res.status(500).json({ error });
	}
});

module.exports = router;
