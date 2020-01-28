const express = require('express');
const router = new express.Router();




router.get('/test', (req, res, next) => {
  res.send("I'm a test");
  next();
});

module.exports = router;