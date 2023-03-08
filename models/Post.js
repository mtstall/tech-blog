const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            }
          },
          postContent: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          dateCreated: {

          },

    },
    {
        sequelize,
        freezeTableName: true,
        modelName: 'post',
    },
);

module.exports = Post;