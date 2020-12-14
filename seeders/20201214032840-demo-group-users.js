'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let groups = [
      {
        name: 'Test Group',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    const groupId = await queryInterface.bulkInsert('Groups', groups, {
      returning: ['id'],
    });

    await queryInterface.bulkInsert('Users', [
      {
        firstName: 'Mr A',
        groupId: groupId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Mr B',
        groupId: groupId,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
