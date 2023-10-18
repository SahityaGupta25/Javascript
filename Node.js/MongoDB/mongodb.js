
        // IMPORT MongoDB Both ways are Same 
        const {MongoClient} = require('mongodb'); // Modern Javascript
        // const MongoClient = require('mongodb').MongoClient;
        
        
        // We need to first specify the path of MongoDB bcoz our VSCOde don't know where MongoDB is situated
        const url = 'mongodb://localhost:27017';
        
        
        // Passing url to fetch data from MongoDB
        const client = new MongoClient(url);
        
        
        // Creating function to get Data 
        async function dbconnect(){
            let result = await client.connect();
            // Mention name of database 
            let db = result.db('e-comm');
            // Mention name of Collection
            return db.collection('products')

            // let response = await collection.find({}).toArray();
            // console.log(response);
        }
        dbconnect().then((res)=>{
            res.find().toArray().then((data)=>{
                console.warn(data);
            })
        })
        // console.log(dbconnect());