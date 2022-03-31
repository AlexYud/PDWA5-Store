const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/pdwa5-store'));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname +
    '/dist/pdwa5-store/src/index.html'));
});
app.listen(process.env.PORT || 8080);