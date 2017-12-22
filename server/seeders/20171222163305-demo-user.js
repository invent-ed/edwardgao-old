'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'Alice',
      lastName: 'Smith',
      email: 'alice.smith@example.com',
      username: 'alicesmith',
      password: 'password'
    }, {
      firstName: 'Bob',
      lastName: 'Smith',
      email: 'bob.smith@example.com',
      username: 'bobsmith',
      password: 'password'
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
};
