import { DataType, Model, Sequelize } from 'sequelize';

module.exports = (sequelize: Sequelize, DataTypes: { [key: string]: DataType }) => {
  class User extends Model {}
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users',
      timestamps: false,
      underscored: true,
    },
  );

  return User;
};
