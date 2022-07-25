module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.addColumn('users', 'refreshToken', {
      allowNull: true,
      type: Sequelize.STRING,
    });
  },

  down(queryInterface) {
    return queryInterface.removeColumn('users', 'refreshToken');
  },
};
