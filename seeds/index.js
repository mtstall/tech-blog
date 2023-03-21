//dependencies for seed data
const sequelize = require("../config/config");
const seedPost = require("./postData");
const seedUser = require("./userData");
const seedComment = require("./commentData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedPost();

  await seedComment();

  //elegantly closes out server
  process.exit(0);
};

seedAll();