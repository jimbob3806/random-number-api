// General imports
const express = require("express")
const http = require("http")

// Own imports
const apollo = require("./config/apollo.js")

// Initiating server - default express configuration
const PORT = process.env.PORT || 5000
const app = express()
apollo.applyMiddleware({ app })
// Build server using https or http depending on configurations declared above
const server = http.createServer(app)
// Run server, and console log on success
server.listen({ port: PORT }, () => {
    console.log(`Server listening on port ${PORT}`)
})
