const url = require('url');
const express = require('express');
const app = express();
const mangoClient = require('mongodb');

require('./router').initRouter(app);

mangoClient.connect(
    "mongodb://localhost:27017/test",
    {useUnifiedTopology : true},
    require('./handlers/mangodb').connection
)

app.listen(8000);