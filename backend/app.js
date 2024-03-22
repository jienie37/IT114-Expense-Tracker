const express = require('express');
const cors = require('cors');
const {db} = require('./DB/db');
const {readdirSync} = require('fs')
const app = express()

require('dotenv').config()

const PORT = process.env.PORT

app.use(express.json())
app.use(cors())


//routes
readdirSync('./ROUTES').map((route) => app.use('/api/v1', require ('./ROUTES/' + route)))


const server = () => {
    db()
    app.listen(PORT, () => {
        console.log('listening to port:', PORT);
    })
}

server()