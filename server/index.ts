import express from 'express'
import cors from 'cors'
import search from './routes/transactions/search'

const app = express()

// Enable All CORS Requests
app.use(cors())

// redirect base route
app.get('/', (req, res) => {
    res.status(301).redirect('/api/v1/health')
})

// Base route
app.get('/api/v1/health', (req, res) => {
    // do some db call here.
    res.status(200).send('OK')
})

app.get('/api/v1/transactions/search', search)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})
