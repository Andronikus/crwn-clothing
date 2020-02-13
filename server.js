const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

// Only include dotenv if not prod env
if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_KEY);

const app = express();
// port that node will listen to requests
const port = process.env.PORT || 5000;

// Every request / response will be parsed automatically
app.use(bodyParser.json());
// Every url from request will be encoded automatically
app.use(bodyParser.urlencoded({ extended: true }));
// cross origin request are permitted
app.use(cors());

if (process.env.NODE_ENV === 'production') {
    // set static content dir to serve
    app.use(express.static(path.join(__dirname, 'client/public')));
    // all get requests not treated will return the index.html file
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client/public', 'index.html'));
    })
}

app.listen(port, error => {
    if (error) throw error;
    console.log('Server is running on port ', port);
});

// routes
// POST /payment
app.post('/payment', (req, res) => {
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'eur'
    }

    // make the request to stripe API
    stripe.charges.create(body, (stripeErr, stripeRes) => {
        if (stripeErr) {
            res.status(500).send({ error: stripeErr });
        } else {
            res.status(200).send({ success: stripeRes });
        }
    })
})