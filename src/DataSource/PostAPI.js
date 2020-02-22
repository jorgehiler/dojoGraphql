const {RESTDataSource} = require("apollo-datasource-rest");

class PostApi extends RESTDataSource{
    constructor(){
        super();
        this.baseURL = "https://jsonplaceholder.typicode.com/";
    }

    async getAllPost(){
        const posts = await this.get("posts");
        const postComments = await Promise.all(
            posts.map( async post => await this.getCommentbyId(post.id) )
        )
        return this.formatPost(posts, postComments)
    }

    async getCommentbyId(postId){
        return await this.get(`posts/${postId}/comments`);
    }

    async formatPost(posts, postComments){
        return posts.map((post, index) => ({
            id: post.id,
            title: post.title,
            body: post.body,
            comments: this.formatComment(postComments[index]),

        }))
    }

    formatComment(comments){
        return comments.map(comment => ({
            id: comment.id,
            name: comment.name,
            email: comment.email,
            body: comment.body,
        }))
    }
}

module.exports = PostApi;
