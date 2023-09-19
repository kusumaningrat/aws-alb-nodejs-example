const express = require('express');
const checkout = require('./services/checkout');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use('/checkout', checkout);

app.get('/', (req, res) => {
    res.send('Homepage');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});

module.exports = app