"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var PostService_1 = __importDefault(require("./services/PostService"));
var CommentService_1 = __importDefault(require("./services/CommentService"));
var UserService_1 = __importDefault(require("./services/UserService"));
var getUser = UserService_1.default.getUser, listUsers = UserService_1.default.listUsers, createUser = UserService_1.default.createUser, updateUser = UserService_1.default.updateUser, deleteUser = UserService_1.default.deleteUser, userPosts = UserService_1.default.posts, userComments = UserService_1.default.comments;
var getPost = PostService_1.default.getPost, listPosts = PostService_1.default.listPosts, createPost = PostService_1.default.createPost, updatePost = PostService_1.default.updatePost, deletePost = PostService_1.default.deletePost, postComments = PostService_1.default.comments, postAuthor = PostService_1.default.user;
var createComment = CommentService_1.default.createComment, updateComment = CommentService_1.default.updateComment, deleteComment = CommentService_1.default.deleteComment, commentPost = CommentService_1.default.post, commentAuthor = CommentService_1.default.user;
var resolverMap = {
    User: {
        posts: userPosts,
        comments: userComments,
    },
    Post: {
        user: postAuthor,
        comments: postComments,
    },
    Comment: {
        user: commentAuthor,
        post: commentPost
    },
    Query: {
        getUser: getUser,
        listUsers: listUsers,
        getPost: getPost,
        listPosts: listPosts,
    },
    Mutation: {
        createUser: createUser,
        updateUser: updateUser,
        deleteUser: deleteUser,
        createPost: createPost,
        updatePost: updatePost,
        deletePost: deletePost,
        createComment: createComment,
        updateComment: updateComment,
        deleteComment: deleteComment,
    },
};
module.exports = resolverMap;
