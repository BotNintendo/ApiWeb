const express = require("express");
const path = require('path');

const router = express.Router();

router.get("/", async (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'));
  // return res.status(200).json({
  //   title: "Express Testing",
  //   message: "The app is working properly!",
  // });
});

module.exports = router;
