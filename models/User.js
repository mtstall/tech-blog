const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
          },
        password: {
            type: DataTypes.INTEGER
          },
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: 'comment',
    },
);