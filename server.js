const express = require('express');
require('dotenv').config();
const mongo_connection = require('./db/connect');

const app = express()
const port = process.env.PORT;

app.get('/', (req, res)=> {
    res.send('Community-Connect Is A Volunteer Matching Platform !');
});

app.listen(port, ()=>{
    console.log(`Server Started Running @ PORT : ${port}`);
    mongo_connection();
});
