import { IFields } from 'models/types';
import { Model } from 'sequelize';

class Tag extends Model {
  static fields({ INTEGER, STRING }: IFields) {
    return {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      label: {
        type: STRING,
        allowNull: false,
      },
    };
  }

  static dbOptions() {
    return {
      modelName: 'Tag',
      tableName: 'tags',
      timestamps: false,
    };
  }
}

export default Tag;
