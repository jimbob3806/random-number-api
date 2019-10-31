// General imports
const express = require("express")
const http = require("http")

// Own imports
const apollo = require("./config/apollo.js")

// Initiating server - default express configuration
const PORT = process.env.PORT || 5000
const app = express()

app.get("/random/:lowerBound/:upperBound", (req, res) => {  
    const [ lowerBound, upperBound ] = Object.keys(req.params).map(key => {
        return parseInt(req.params[key])
    })
    if(lowerBound >= upperBound) { 
        return res.status(400).send({ 
            randomNumber: null,
            message: "upperBound must be greater than lowerBound!"
        }) 
    }
    const boundDif = upperBound - lowerBound
    const randInt = Math.round(Math.random() * boundDif + lowerBound)
    return res.status(200).send({ randomNumber: randInt})
})

apollo.applyMiddleware({ app })
// Build server using https or http depending on configurations declared above
const server = http.createServer(app)
// Run server, and console log on success
server.listen({ port: PORT }, () => {
    console.log(`Server listening on port ${PORT}`)
})
