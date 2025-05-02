const express = require('express')
const cors = require('cors')
const projectRoutes = require('./routes/projectRoutes.js')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/projects', projectRoutes)

module.exports = app;