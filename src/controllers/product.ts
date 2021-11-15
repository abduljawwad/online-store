import express, { Request, Response } from 'express';
import { Product } from '../models/product';
import { Op } from 'sequelize';
import { Review } from '../models/review';
import { Description } from '../models/description';

const router = express.Router();

export const createProduct = router.post(
  '/create',
  async (req: Request, res: Response) => {
    try {
      const record = await Product.create({ ...req.body });
      await res.json({
        record,
        msg: 'dB entry successfully created in product table',
      });
    } catch (error: any) {
      await res.json(error.message);
    }
  }
);

export const getAllProducts = router.get(
  '/',
  async (req: Request, res: Response) => {
    try {
      const products = await Product.findAll({
        include: [Review, Description],
      });
      res.json(products);
    } catch (error: any) {
      await res.json(error.message);
    }
  }
);

export const getProductsByName = router.get(
  '/getproductsbyname',
  async (req: Request, res: Response) => {
    const { name } = req.body;
    try {
      const products = await Product.findAll({
        where: {
          name: {
            [Op.substring]: name,
          },
        },
        include: [Review, Description],
      });
      res.json(products);
    } catch (error: any) {
      await res.json(error.message);
    }
  }
);

export const updateProduct = router.put(
  '/:id',
  async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const products = await Product.update(
        { ...req.body },
        {
          where: {
            id,
          },
        }
      );
      res.json(products);
    } catch (error: any) {
      await res.json(error.message);
    }
  }
);

export const deleteProduct = router.delete(
  '/:id',
  async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const products = await Product.destroy({
        where: {
          id,
        },
      });
      res.json(products);
    } catch (error: any) {
      await res.json(error.message);
    }
  }
);
