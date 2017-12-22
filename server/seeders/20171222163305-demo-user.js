'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'Alice',
      lastName: 'Smith',
      email: 'alice.smith@example.com',
      username: 'alicesmith',
      password: 'password',
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'Bob',
      lastName: 'Smith',
      email: 'bob.smith@example.com',
      username: 'bobsmith',
      password: 'password',
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
};
