const { ApolloServer } = require("apollo-server")

const typeDefs = require("./scheme");
const resolvers = require("./resolvers");
const PostApi = require("./DataSource/PostAPI")

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({PostApi: new PostApi()})
})

server.listen().then(({ url}) => 
    console.log(`Server ready kyc ud ${url}` ))