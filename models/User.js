const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const bcrypt = require('bcrypt');

class User extends Model {
    checkPassword(loginPw) {
        console.log("loginPw: ",loginPw);
        console.log(typeof loginPw);
        console.log("this.password: ",this.password);
        console.log(typeof this.password);
        console.log("bcrypt: ",bcrypt.compareSync(loginPw, this.password));
        return bcrypt.compareSync(loginPw, this.password);
      }
}

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
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [6],
            },
          },
    },
    {
        hooks: {
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                console.log("hashed password: ",newUserData);
                return newUserData;
            },
            async beforeUpdate(updatedUserData) {
                updatedUserData.username = await updatedUserData.username.toLowerCase();
                return updatedUserData;
            },
        },
        sequelize,
        freezeTableName: true,
        modelName: 'user',
    },
);

module.exports = User;