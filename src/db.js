import mongodb from 'mongodb';
const mongo = require('mongodb')
let connection_string = process.env.CONNECTION_STRING;

let client = new mongo.MongoClient(connection_string, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

let db = null
export default () => {
    return new Promise((resolve, reject) => {
        if (db && client.isConnected()) {
            resolve(db)
        }

        client.connect(err => {
            if (err) {
                reject("Doslo je do greske prilikom spajanja: " + err)
            }
            else {
                console.log("Uspjesno spajanje na bazu")
                let db = client.db("PivovaraMedvegrad")
                resolve(db)
            }
        })
    })
}