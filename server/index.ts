require('dotenv').config()
import express from 'express'
import cors from 'cors'
import { db } from './database'
import search from './routes/transactions/search'
import { createSchema } from './routes/schema/service'

const app = express()

// Enable All CORS Requests
app.use(cors())

// redirect base route
app.get('/', (req, res) => {
    res.status(301).redirect('/api/v1/health')
})

// Base route
app.get('/api/v1/health', async (req, res) => {
    const schemas = await db.collection('schema').find({}) // do some db call here.
    return res.json(schemas)
    res.status(200).send('OK')
})

app.get('/api/v1/init-schema', async (req, res) => {
    await db.command({
        collMod: 'schema',
        validator: {
            $jsonSchema: {
                bsonType: 'object',
                required: ['name'],
                properties: {
                    name: {
                        bsonType: 'string',
                        description: 'must be a string and is required',
                    },
                    dependencies: {
                        bsonType: 'array',
                        items: {
                            type: 'string',
                        },
                        description: 'must be an array of values',
                    },
                },
            },
        },
    })
    res.status(200).send('OK')
})

app.get('/api/v1/create-schema', async (req, res) => {
    const schema = await createSchema({ name: 'test' })
    return res.json(schema)
})

app.get('/api/v1/transactions/search', search)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.info(`🌈  Server is running http://localhost:${PORT} 🦄`)
})
