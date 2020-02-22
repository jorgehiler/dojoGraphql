module.exports = {
    Query: {
        posts: (_, __, {dataSources}) => dataSources.PostApi.getAllPost()
    }
}