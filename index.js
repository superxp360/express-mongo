import express from 'express'
import cors from 'cors'

import { addFurniture } from './furniture.js'

//this is to be able to use the .env file
import dotenv from 'dotenv'
dotenv.config()

console.log('MY PORT', process.env.PORT)

const app = express()
app.use(cors())
app.use(express.json()) // to be able to receive JSON as POST

app.post('/', addFurniture)

const PORT = process.env.PORT || 4040

app.get('/', (req, res) => {
   res.status(200).send('test with send 😎')})
   

app.listen(PORT, () => console.log('My api is ruuning'))