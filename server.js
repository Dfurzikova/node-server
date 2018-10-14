const express = require('express');
const app = express();
const status = require('./status');
const getData = require('./get-data');

app.get('/status', function (req, res) {
    res.send(status());
});

app.get('/api/events', function (req, res) {
    const result = getData(req, res);

    res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");

    if (result.status) {
        res.status(result.status);
    }

    res.send(result.response);
});

app.get('/*', function (req, res) {
    res.status(404).send('<h1>Page not found</h1>');
});

app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
});
