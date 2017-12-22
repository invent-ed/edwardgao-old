'use strict';

let payload1 = {
  type: "sms",
  version: "1.0",
  content: "Hello!"
}

let payload2 = {
  type: "sms",
  version: "1.0",
  content: "World!"
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Messages', [{
      from_user_id: 1,
      to_user_id: 2,
      payload: JSON.stringify(payload1),
      delivered: false,
      read: null,
      deleted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      from_user_id: 2,
      to_user_id: 1,
      payload: JSON.stringify(payload2),
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Messages');
  }
};
