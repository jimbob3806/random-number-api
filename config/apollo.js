// Builds and exports an apollo server, built from each graphqlModule defined
// in ../models/*

// General imports
const { ApolloServer } = require("apollo-server-express")

// Own imports - importing all of the schemas (typeDefs), and resolvers defined
// under ./models
const Random = require("../models/random").graphqlModule

// Export apollo server, built with all of the models (schemas and resolvers)
// imported above
module.exports = new ApolloServer({
    // Note that order of modules in array is not important - i.e. A may appear
    // before B in the array, even if A may require types defined within B
    modules: [
        Random
    ],
    // apollo server playground (playground and introspection) should be
    // disabled for production by setting the 2 below fields to false
    introspection: true,
    playground: true,
})