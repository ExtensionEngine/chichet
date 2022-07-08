import { DataType, Model, Sequelize } from 'sequelize';

module.exports = (sequelize: Sequelize, DataTypes: { [key: string]: DataType }) => {
  class UserTag extends Model {}
  UserTag.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

      tagId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'UserTag',
      tableName: 'userTags',
      timestamps: false,
    },
  );

  return UserTag;
};
