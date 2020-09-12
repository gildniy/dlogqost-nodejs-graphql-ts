module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
        'Users',
        [
            {
                name: 'Jane Doe 1',
                email: 'janedoe1@example.com',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: 'Jon Doe 2',
                email: 'jondoe2@example.com',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ],
        {},
    ),

    down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};