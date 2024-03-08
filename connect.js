const { MongoClient } = require('mongodb');
require('dotenv').config({path: '../.env'});

const url = process.env.ATLAS_URI;
const client = new MongoClient(url);

async function mongo_connection() {
    try {
        await client.connect();
        console.log('MongoDB Atlas Connection Successfull !');
    } catch (err) {
        console.log(err.stack);
    } finally {
        await client.close();
    }
}

module.exports = mongo_connection;
