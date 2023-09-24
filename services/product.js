const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    let dumyData;
    const filePath = path.join(__dirname, '../data.json');
    for (let i = 0; i <= 1000; i++){
        dumyData = fs.readFileSync(filePath);
    }
    const data = JSON.parse(dumyData);
    res.json({
        data
    })
});

module.exports = router;