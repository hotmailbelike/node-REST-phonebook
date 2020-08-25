const express = require('express');
const path = require('path');

const connectDB = require('./config/db');

const app = express();

//Connect to Database
connectDB();

//Init middleware
app.use(express.json({ extended: false }));

//Define routes
app.use('/api/contacts', require('./routes/contact.routes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});
