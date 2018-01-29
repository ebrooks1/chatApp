const express = require('express'); //this is the same as a php include
const router = express.Router();
const path = require('path');

router.get('/contact', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../views/contact.html'))
});

module.exports = router;
