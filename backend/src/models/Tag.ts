import { DataType, Model, Sequelize } from 'sequelize';

module.exports = (sequelize: Sequelize, DataTypes: { [key: string]: DataType }) => {
  class Tag extends Model {}
  Tag.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      label: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Tag',
      tableName: 'tags',
      timestamps: false,
      underscored: true,
    },
  );

  return Tag;
};
