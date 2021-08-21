const express = require('express');
const router = express.Router();

//page routes
router.get('/', (req, res) => {
    res.send('This is the homepage')
});

router.get('/about', (req, res) => {
    res.send('this is the about page')
});

router.get('/products', (req, res) => {
    res.send('this is the products page')
})

router.get('/contact', (req, res) => {
    res.send('this is the contact page')
})
module.exports = router;