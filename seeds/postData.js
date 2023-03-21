const { Post } = require("../models");

const postData = 
[
    {
        id: 1,
        title: "Tay's post",
        userId: 1,
        postContent: "my post content"
    },
    {
        id: 2,
        title: "Goofy's post",
        userId: 2,
        postContent: "my post content"
    },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;