import express from 'express'

//Connect to database
import db from '../db/connection.js'

//Get object ID
import { ObjectId } from 'mongodb'


const router = express.Router()

//Get all jobs
router.get('/', async (req, res) => {
    let collection = await db.collection('listing')
    let results = await collection.find({}).toArray()
    res.send(results).status(200)
})

//Get a single job ID
router.get('/:id', async (req, res) => {
    let collection = await db.collection('listing')
    let query = { _id: new ObjectId(req.params.id) }
    let result = await collection.findOne(query)

    if (!result) res.send('Not Found Yo').status(404)
    else res.send(result).status(200)
})

//Create new job
router.post('/', async (req, res) => {
    try {
        let newDocument = {
            type: req.body.type,
            title: req.body.title,
            description: req.body.description,
            game: req.body.game,
            time: req.body.time,
            playerName: req.body.playerName,
            email: req.body.email,
            discord: req.body.discord,
        }
        let collection = await db.collection('listing')
        let result = await collection.insertOne(newDocument)
        res.send(result).status(202)
    } catch (err) {
        console.error(err)
        res.status(500).send('Error adding listing')
    }
})

//Update job
router.patch('/:id', async (req, res) => {
    try {
        const query = { _id: new ObjectId(req.params.id) }
        const updates = {
            $set: {
                type: req.body.type,
                title: req.body.title,
                description: req.body.description,
                game: req.body.game,
                time: req.body.time,
                playerName: req.body.playerName,
                email: req.body.email,
                discord: req.body.discord,
            },
        }

        let collection = await db.collection('listing')
        let result = await collection.updateOne(query, updates)
        res.send(result).status(200)
    } catch (err) {
        console.error(err)
        res.status(500).send('Error Updating Listing')
    }
})

//Delete
router.delete('/:id', async (req, res) => {
    try {
        const query = { _id: new ObjectId(req.params.id) }

        const collection = db.collection('listing')
        let result = await collection.deleteOne(query)

        res.send(result).status(200)
    } catch (err) {
        console.error(err)
        res.status(500).send('Error Attempting Deletion')
    }
})

export default router;