import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import listings from './routes/listingRoute.js'


const PORT = process.env.PORT
const app = express()

app.use(cors())
app.use(express.json())

app.use('/listing', listings)

app.listen(PORT, () => {
    console.log(`${PORT} is on and listening`)
})