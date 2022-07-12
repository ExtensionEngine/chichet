module.exports = {
  up(queryInterface, Sequelize) {
    queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      firstName: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      lastName: {
        allowNull: true,
        type: Sequelize.STRING,
      },

      nickname: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },

      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
  },

  down(queryInterface) {
    queryInterface.dropTable('users');
  },
};
