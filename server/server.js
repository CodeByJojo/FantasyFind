import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import listing from './routes/jobRoute.js'


const PORT = process.env.PORT
const app = express()

app.use(cors())
app.use(express.json())

// '/jobs' = route to use
app.use('/listings', listing)

app.listen(PORT, () => {
    console.log(`${PORT} is on and listening`)
})