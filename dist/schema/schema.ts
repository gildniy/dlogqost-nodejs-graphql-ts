import gql from 'graphql-tag'

module.exports = gql`
    # Model types
    type User {
        id: Int
        name: String
        email: String
        createdAt: String
        updatedAt: String
        comments: ModelCommentConnection
        posts: ModelPostConnection
    }

    type Post {
        id: Int
        title: String
        content: String
        userId: String
        createdAt: String
        updatedAt: String
        user: User
        comments: ModelCommentConnection
    }

    type Comment {
        id: Int
        postId: Int
        userId: Int
        comment: String
        createdAt: String
        updatedAt: String
        post: Post
        user: User
    }

    # Query types
    type Query {
        getPost(id: Int!): Post
        getUser(id: Int!): User
        listPosts(offset: Int, limit: Int): ModelPostConnection
        listUsers(offset: Int, limit: Int): ModelUserConnection
    }

    type ModelUserConnection {
        items: [User]
    }

    type ModelCommentConnection {
        items: [Comment]
    }

    type ModelPostConnection {
        items: [Post]
    }

    # Mutation types
    type Mutation {
        createUser(input: CreateUserInput!): User!
        updateUser(input: UpdateUserInput!): User!
        deleteUser(input: DeleteUserInput!): User!
        createPost(input: CreatePostInput!): Post!
        updatePost(input: UpdatePostInput!): Post!
        deletePost(input: DeletePostInput!): Post!
        createComment(input: CreateCommentInput!): Comment!
        updateComment(input: UpdateCommentInput!): Comment!
        deleteComment(input: DeleteCommentInput!): Comment!
    }

    input CreateUserInput {
        id: Int
        name: String!
        email: String!
    }

    input UpdateUserInput {
        id: Int!
        name: String
        email: String
    }

    input DeleteUserInput {
        id: Int
    }

    input CreatePostInput {
        id: Int
        title: String!
        content: String!
    }

    input UpdatePostInput {
        id: Int!
        title: String
        content: String
    }

    input DeletePostInput {
        id: Int
    }

    input CreateCommentInput {
        id: Int
        postId: Int!
        comment: String!
    }

    input UpdateCommentInput {
        id: Int!
        comment: String
    }

    input DeleteCommentInput {
        id: Int
    }
`;
