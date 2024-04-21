import express from 'express'
import cors from 'cors'
import listings from './routes/listingRoute.js'

require('dotenv').config({ path: '/.env'})

const PORT = process.env.PORT || 1212
const app = express()

app.use(cors())
app.use(express.json())

app.use('/listing', listings)

app.listen(PORT, () => {
    console.log(`${PORT} is on and listening`)
})