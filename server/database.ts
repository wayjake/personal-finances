import { MongoClient, ServerApiVersion, SchemaMember } from 'mongodb'
const uri = process.env.MONGO_CONNECTION
const dbName = process.env.MONGO_DB_NAME

if (!uri) {
    console.error(`Mongo connection string was not provided in the .env`)
    process.exit(1)
}

if (!dbName) {
    console.error(`Database name was not provided in the .env`)
    process.exit(1)
}

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
})

export const db = client.db(process.env.dbName)

async function run() {
    try {
        console.log(`trying to connect to db`)
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect()
        console.log(`connected`)
        // Send a ping to confirm a successful connection
        await client.db('admin').command({ ping: 1 })
        console.log('Pinged your deployment. You successfully connected to MongoDB!')
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close()
    }
}

run().catch((error) => {
    console.info(`Mongo connection global handler`)
    console.error(error)
    process.exit(1)
})
