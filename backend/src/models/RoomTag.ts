import { DataType, Model, Sequelize } from 'sequelize';

module.exports = (sequelize: Sequelize, DataTypes: { [key: string]: DataType }) => {
  class RoomTag extends Model {}
  RoomTag.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      roomId: {
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
      modelName: 'RoomTag',
      tableName: 'roomTags',
      timestamps: false,
    },
  );

  return RoomTag;
};
