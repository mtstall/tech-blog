const { User } = require("../models");

const userData = 
[
    {
        id: 1,
        username: "mtstall",
        password: "12345"
    },
    {
        id: 2,
        username: "goofy",
        password: "goofy"
    },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;