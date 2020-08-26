const express = require('express');
const router = express.Router();

const Contact = require('../models/Contact.model');

router.get('/', async (req, res) => {
	try {
		const contact = await Contact.find();
		res.json(contact);
	} catch (error) {
		res.status(500).json({ error });
	}
});

router.post('/', async (req, res) => {
	try {
		const contact = new Contact(req.body);
		// let validator = /^[0-9]*$/
		let validator = /^\d+$/;

		let { number } = contact;

		if (number.length === 14) {
			if (number[0] !== '+') {
				return res.status(400).json({
					error: 'Invalid Bangladeshi Phone Number!',
				});
			}
			if (!validator.test(number.slice(1))) {
				return res.status(400).json({
					error: 'Invalid Bangladeshi Phone Number!',
				});
			}
			await contact.save();
		} else if (number.length === 11) {
			if (number[0] !== '0') {
				return res.status(400).json({
					error: 'Invalid Bangladeshi Phone Number!',
				});
			}
			if (!validator.test(number)) {
				return res.status(400).json({
					error: 'Invalid Bangladeshi Phone Number!',
				});
			}

			contact.number = '+88' + contact.number;
			await contact.save();
		} else {
			return res.status(400).json({
				error: 'Invalid Bangladeshi Phone Number!',
			});
		}

		return res.status(200).json({
			message: 'Successfully saved Contact!',
		});
	} catch (error) {
		res.status(500).json({ error });
	}
});

router.delete('/:id', async (req, res) => {
	try {
		await Contact.findByIdAndDelete(req.params.id, { useFindAndModify: false });
		res.json({ msg: `Contact Removed` });
	} catch (error) {
		res.status(500).json({ error });
	}
});

router.put('/:id', async (req, res) => {
	try {
		let number = req.body.number;
		let validator = /^\d+$/;

		if (number.length === 14) {
			if (number[0] !== '+') {
				return res.status(400).json({
					error: 'Invalid Bangladeshi Phone Number!',
				});
			}
			if (!validator.test(number.slice(1))) {
				return res.status(400).json({
					error: 'Invalid Bangladeshi Phone Number!',
				});
			}
			var contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
				useFindAndModify: false,
				new: true,
			});
		} else if (number.length === 11) {
			if (number[0] !== '0') {
				return res.status(400).json({
					error: 'Invalid Bangladeshi Phone Number!',
				});
			}
			if (!validator.test(number)) {
				return res.status(400).json({
					error: 'Invalid Bangladeshi Phone Number!',
				});
			}

			req.body.number = '+88' + number;
			var contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
				useFindAndModify: false,
				new: true,
			});
		} else {
			return res.status(400).json({
				error: 'Invalid Bangladeshi Phone Number!',
			});
		}

		res.json({ msg: `Contact Updated`, contact });
	} catch (error) {
		res.status(500).json({ error });
	}
});

router.post('/search/:number', async (req, res) => {
	let number = req.params.number.toString();
	try {
		let contact = await Contact.find({
			number: req.params.number,
		});
		res.json(contact);
	} catch (error) {
		res.status(500).json({ error });
	}
});

module.exports = router;
