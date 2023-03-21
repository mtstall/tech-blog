const { Comment } = require("../models");

const commentData = 
[
    {
        id: 1,
        title: "Tay's comment",
        userId: 1,
        postId: 2,
        commentContent: "cool post"
    },
    {
        id: 2,
        title: "Goofy's comment",
        userId: 2,
        postId: 1,
        commentContent: "didn't know u were chill like that"
    },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;