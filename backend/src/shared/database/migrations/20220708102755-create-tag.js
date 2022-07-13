module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('tags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      label: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
    });
  },

  down(queryInterface) {
    return queryInterface.dropTable('tags');
  },
};
