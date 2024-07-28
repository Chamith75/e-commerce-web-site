const mongo = require('mongodb');

let mongourl = 'mongodb://127.0.0.1:27017'
let db ;


async function dbconnect() {
    const client = new mongo.MongoClient(mongourl);
    await client.connect();
    db = client.db('chamith');
    console.log('connection with MongoDb succefull');
    

}

async function getdata(colName , query ){
    return await db.collection(colName).find(query).toArray()
}


module.exports = {
    dbconnect,
    getdata

}