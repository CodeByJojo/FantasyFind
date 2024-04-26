import {MongoClient, ServerApiVersion} from 'mongodb'



const uri = process.env.DB_STRING
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
})

try {
    //Connection client to server
    await client.connect()

    //Success ping
    await client.db('admin').command({ping: 1})

    console.log('Connected to MongoDB')
} catch(err) {
    console.error(err)
}

let db = client.db('listing') //mern has this as: employees

export default db