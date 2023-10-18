
        // IMPORT MongoDB Both ways are Same 
const {MongoClient} = require('mongodb'); // Modern Javascript
// const MongoClient = require('mongodb').MongoClient;


// We need to first specify the path of MongoDB bcoz our VSCOde don't know where MongoDB is situated
const url = 'mongodb://localhost:27017';


// Passing url to fetch data from MongoDB
const client = new MongoClient(url);


// Creating function to get Data 
async function getData(){
    let result = await client.connect();
    // Mention name of database 
    let db = result.db('e-comm');
    // Mention name of Collection
    let collection = db.collection('products')
    let response = await collection.find({}).toArray();
    console.log(response);
}
getData();