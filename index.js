const express = require('express');
const product = require('./services/product');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use('/product', product);

app.get('/', (req, res) => {
    res.send('Homepage');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});

module.exports = app