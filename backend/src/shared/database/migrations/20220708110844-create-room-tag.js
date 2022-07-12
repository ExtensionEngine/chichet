module.exports = {
  up(queryInterface, Sequelize) {
    queryInterface.createTable('roomTags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
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

      tagId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'tags',
          },
          key: 'id',
        },
      },
    });
  },

  down(queryInterface) {
    queryInterface.dropTable('roomTags');
  },
};
