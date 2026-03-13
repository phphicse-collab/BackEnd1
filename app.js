const express = require('express');
const cors = require('cors');
const app = express();
const contactsRoutes = require('./app/routes/contact.route');
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to contact book application.' });
});

app.use('/api/contacts', contactsRoutes);

module.exports = app;