const express = require("express");
const path = require('path');

const router = express.Router();

let s = '';

router.get("/", async (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'));
  // return res.status(200).json({
  //   title: "Express Testing",
  //   message: "The app is working properly!",
  // });
});

app.post('/send', (req, res) => {
  //res.json({ requestBody: req.body })  // <==== req.body will be a parsed JSON object

  s = req.body;
  console.log(s);
  res.send('ok');
});

app.post('/received', (req, res) => {
  res.json({ s })  // <==== req.body will be a parsed JSON object
  s = "";
  res.send('ok');
});


module.exports = router;
