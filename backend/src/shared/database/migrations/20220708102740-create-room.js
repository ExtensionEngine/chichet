module.exports = {
  up(queryInterface, Sequelize) {
    queryInterface.createTable('rooms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      description: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
  },

  down(queryInterface) {
    queryInterface.dropTable('rooms');
  },
};
