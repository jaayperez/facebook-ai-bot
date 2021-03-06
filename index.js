require('dotenv').config({ path: '.env' }) // Load environment variables

const express = require('express')
const bodyParser = require('body-parser')

const verifyWebhook = require('./src/verify-webhook')
const messageWebhook = require('./src/message-webhook')

const app = express()

app.use(bodyParser.json()) // Process application/json
app.use(bodyParser.urlencoded({ extended: false })) // Process application/x-www-form-urlencoded

app.get('/', (req, res) => res.send('Hello!')) // Index route

app.get('/webhook', verifyWebhook) // Facebook verification
app.post('/webhook', messageWebhook) // Webhook endpoint

app.listen(5000, () => console.log('⚡ listening on port 5000')) // Listen (start server with node index.js)
