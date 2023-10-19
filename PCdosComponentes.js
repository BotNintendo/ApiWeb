const path = require('path');

const express = require('express');
const app = express();

let s = '';
app.use(express.json())    // <==== parse request body as JSON

app.listen(8000)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.post('/send', (req, res) => {
    //res.json({ requestBody: req.body })  // <==== req.body will be a parsed JSON object

    s = req.body;
    console.log(s);
})

app.post('/received', (req, res) => {
    res.json({ s })  // <==== req.body will be a parsed JSON object
    s = "";
})
