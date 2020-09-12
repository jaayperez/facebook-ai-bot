const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json()) // Process application/json
app.use(bodyParser.urlencoded({ extended: false })) // Process application/x-www-form-urlencoded

app.get('/', (req, res) => res.send('Hello!')) // Index route

app.listen(5000, () => console.log('⚡ listening on port 5000')) // Listen (start server with node index.js)
