module.exports = {
  up(queryInterface, Sequelize) {
    queryInterface.createTable('userRoomInteractions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'users',
          },
          key: 'id',
        },
      },

      roomId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'rooms',
          },
          key: 'id',
        },
      },

      joinedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      leftAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down(queryInterface) {
    queryInterface.dropTable('userRoomInteractions');
  },
};
