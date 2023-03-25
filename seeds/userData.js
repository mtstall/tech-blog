const { User } = require("../models");

const userData = 
[
    {
        id: 1,
        username: "mtstall",
        password: "123456"
    },
    {
        id: 2,
        username: "goofy",
        password: "goofy1"
    },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;