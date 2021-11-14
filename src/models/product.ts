import db from '../config/db.config';
import { Model, DataTypes } from 'sequelize';

interface ProductAttributes {
  uuid: String;
  brand: String;
  name: String;
  price: Number;
  description: String;
  currencySign?: String;
  imageLink?: String;
  category?: String;
  productType: String;
  tagList?: String[];
  productColors?: String[];
}

export class ProductInstance extends Model<ProductAttributes> {}

ProductInstance.init(
  {
    uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Maybelline',
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    currencySign: {
      type: DataTypes.STRING,
      defaultValue: '£',
    },
    imageLink: {
      type: DataTypes.STRING,
    },
    category: {
      type: DataTypes.STRING,
    },
    productType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tagList: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
    },
    productColors: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
    },
  },
  {
    sequelize: db,
    tableName: 'Products',
    timestamps: false,
  }
);
