import express from 'express';
import db from './config/db.config';
import {
  createDescription,
  deleteDescription,
  getAllDescriptions,
  updateDescription,
} from './controllers/description';
import {
  createProduct,
  getAllProducts,
  getProductsByName,
  updateProduct,
  deleteProduct,
} from './controllers/product';
import {
  createReview,
  deleteReview,
  getAllReviews,
  updateReview,
} from './controllers/review';
require('dotenv').config();

const app = express();
const port = `${process.env.PORT}`;

// to parse json request body
app.use(express.json());

// to create tables from sequelize models
db.sync({ alter: true })
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err: string) => {
    console.error('Unable to connect to the database:', err);
  });

// assign controllers to routes
app.use('/', createProduct);
app.use('/', getAllProducts);
app.use('/', getProductsByName);
app.use('/', updateProduct);
app.use('/', deleteProduct);

app.use('/', createReview);
app.use('/', getAllReviews);
app.use('/', updateReview);
app.use('/', deleteReview);

app.use('/', createDescription);
app.use('/', getAllDescriptions);
app.use('/', updateDescription);
app.use('/', deleteDescription);

app.listen(port, () => {
  console.log(`server is running on port# : ${port}`);
});
