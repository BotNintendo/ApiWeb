// Import packages
const express = require("express");
const home = require("./routes/home");

let s = '';

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use("/home", home);

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));

app.post('/send', (req, res) => {
    //res.json({ requestBody: req.body })  // <==== req.body will be a parsed JSON object

    s = req.body;
    console.log(s);
})

app.post('/received', (req, res) => {
    res.json({ s })  // <==== req.body will be a parsed JSON object
    s = "";
})
