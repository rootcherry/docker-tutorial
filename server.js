const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get('/', function(req, res) {
    // res.sendFile(path.join(__dirname, "index.html"));
    res.sendFile(__dirname + "/index.html");
});

app.get('/profile-picture', function(req, res) {
    let img = fs.readFileSync('public/images/profile-1.jpg');
    res.writeHead(200, {'Content-Type': 'image/jpg'});
    res.end(img, 'binary');
});

app.listen(3000, function () {
    console.log("app listening on port 3000!");
});
