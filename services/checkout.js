const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    let dumyData;   
    const customer = "Customer 1";
    const filePath = path.join(__dirname, '../data.json');
    for (let i = 0; i < 1000; i++) {
        dumyData = fs.readFileSync(filePath);
    }
    const data = JSON.parse(dumyData);
    res.json({
        "message": 'Successfully checkout the product',
        "customer_name": customer,
        "data": data[0]
    })
});

module.exports = router;