require('dotenv').config();
const mongoUri = process.env.MONGO_URI;
const expressValidator = require('express-validator');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const cors = require('cors');
const pages = require('./routes/page-routes');
const users = require('./routes/user');

mongoose.connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true });

// check for proper connection
const database = mongoose.connection;
database.on('error', console.error.bind(console, 'connection error: '));
database.once('open', () => {
    console.log('mongo database connected')
});

//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(expressValidator())
app.use(cors());

//routes
app.use(pages);
app.use(users);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});