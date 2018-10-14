var express = require('express');
var app = express();
var status = require('./status');

app.get('/status', function (req, res) {
    res.send(status());
});

app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
});
