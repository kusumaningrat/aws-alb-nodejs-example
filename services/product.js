const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    const filePath = path.join(__dirname, '../data.json');
    const dumyData = fs.readFileSync(filePath);
    const data = JSON.parse(dumyData);
    res.json({
        data
    })
});

module.exports = router;