import db from '../config/db.config';
import { ModelDefined, DataTypes, Optional } from 'sequelize';

interface ReviewAttributes {
  id: String;
  review: String;
  rating?: Number;
  product_id: String;
}

interface ReviewCreationAttributes
  extends Optional<ReviewAttributes, 'rating'> {}

export const Review: ModelDefined<ReviewAttributes, ReviewCreationAttributes> =
  db.define(
    'Review',
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      review: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      rating: {
        type: DataTypes.INTEGER,
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
      tableName: 'review',
      timestamps: false,
    }
  );
