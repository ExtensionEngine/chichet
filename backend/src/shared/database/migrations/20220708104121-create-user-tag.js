module.exports = {
  up(queryInterface, Sequelize) {
    queryInterface.createTable('userTags', {
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
    queryInterface.dropTable('userTags');
  },
};
