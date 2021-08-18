require('dotenv').config();
const mongoUri = process.env.MONGO_URI;
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

// connect our database
mongoose.connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true });

// check for proper connection
const database = mongoose.connection;
database.on('error', console.error.bind(console, 'connection error: '));
database.once('open', () => {
    console.log('mongo database connected')
});

app.get('/', (req, res) => {
    res.send('testing express app')
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});