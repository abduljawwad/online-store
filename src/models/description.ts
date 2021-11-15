import db from '../config/db.config';
import { DataTypes, ModelDefined, Optional } from 'sequelize';

interface DescriptionAttributes {
  id: String;
  description: String;
  product_id: String;
}

interface DescriptionCreationAttributes
  extends Optional<DescriptionAttributes, 'id'> {}
export const Description: ModelDefined<
  DescriptionAttributes,
  DescriptionCreationAttributes
> = db.define(
  'Description',
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    product_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'product',
        key: 'id',
      },
    },
  },
  {
    tableName: 'description',
    timestamps: false,
  }
);
