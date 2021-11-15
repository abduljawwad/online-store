import db from '../config/db.config';
import { ModelDefined, DataTypes, Optional } from 'sequelize';
import { Review } from './review';
import { Description } from './description';

interface ProductAttributes {
  id: String;
  brand: String;
  name: String;
  price: Number;
  currencySign?: String;
  imageLink?: String;
  category?: String;
  productType: String;
  tagList?: String[];
  productColors?: String[];
}

interface ProductCreationAttributes
  extends Optional<
    ProductAttributes,
    | 'id'
    | 'currencySign'
    | 'imageLink'
    | 'category'
    | 'tagList'
    | 'productColors'
  > {}

export const Product: ModelDefined<
  ProductAttributes,
  ProductCreationAttributes
> = db.define(
  'Product',
  {
    id: {
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
  { tableName: 'product', timestamps: false }
);

Product.hasMany(Review, {
  sourceKey: 'id',
  foreignKey: 'productId',
  as: 'reviews',
});

Product.hasOne(Description, { sourceKey: 'id' });

Description.belongsTo(Product, { targetKey: 'id' });

Review.belongsTo(Product, { targetKey: 'id' });
