const express = require('expresss');
const db = require('./db');

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log(`Express listening on port ${port}`);
});
