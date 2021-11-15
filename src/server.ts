import express from 'express';
import db from './config/db.config';
import {
  createProduct,
  getAllProducts,
  getProductsByName,
  updateProduct,
  deleteProduct,
} from './controllers/product';
require('dotenv').config();

const app = express();
const port = `${process.env.PORT}`;
app.use(express.json());

db.sync({ alter: true })
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err: string) => {
    console.error('Unable to connect to the database:', err);
  });

app.use('/', createProduct);
app.use('/', getAllProducts);
app.use('/', getProductsByName);
app.use('/:id', updateProduct);
app.use('/:id', deleteProduct);

app.listen(port, () => {
  console.log(`server is running on port# : ${port}`);
});
