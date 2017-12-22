'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Messages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      from_user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: User,
          key: 'id'
        }
      },
      to_user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: User,
          key: 'id'
        }
      },
      payload: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      delivered: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      read: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      deleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Messages');
  }
};
