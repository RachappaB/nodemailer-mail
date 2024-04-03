var express = require('express');
var router = express.Router();
const path = require('path');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/photo', (req, res) => {
  const ipAddress = req.ip;
  console.log(ipAddress)

  // Send the IP address in the response along with the photo
  res.sendFile(path.join(__dirname, 'images', '1.webp'));
});
module.exports = router;
