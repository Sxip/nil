module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Profiles', {
    user_id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.STRING,
    },
    balance: {
      type: Sequelize.BIGINT(),
      defaultValue: 0,
    },
    background: {
      type: Sequelize.STRING,
      defaultValue: 'default',
    },
  }),
  down: queryInterface => queryInterface.dropTable('Profiles'),
};
