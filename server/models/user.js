'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING, // 255 chars
      allowNull: false,
      validate: {
        is: /^[0-9A-z]+$/g
      }
    },
    lastName: {
      type: DataTypes.STRING, // 255 chars
      allowNull: false,
      validate: {
        is: /^[0-9A-z]+$/g
      }
    },
    email: {
      type: DataTypes.STRING, // 255 chars
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    username: {
      type: DataTypes.STRING, // 255 chars
      allowNull: false,
      unique: true,
      validate: {
        is: /^[0-9A-z-_]+$/g
      }
    },
    password: {
      type: DataTypes.STRING, // 255 chars
      allowNull: false
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};
