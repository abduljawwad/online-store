import express, { Request, Response } from 'express';
import { ProductInstance } from '../models/product';
import { Op } from 'sequelize';

const router = express.Router();

export const createProduct = router.post(
  '/create',
  async (req: Request, res: Response) => {
    try {
      const record = await ProductInstance.create({ ...req.body });
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
      const products = await ProductInstance.findAll({});
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
      const products = await ProductInstance.findAll({
        where: {
          name: {
            [Op.substring]: name,
          },
        },
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
    const { id: uuid } = req.params;
    try {
      const products = await ProductInstance.update(
        { ...req.body },
        {
          where: {
            uuid,
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
    const { id: uuid } = req.params;
    try {
      const products = await ProductInstance.destroy({
        where: {
          uuid,
        },
      });
      res.json(products);
    } catch (error: any) {
      await res.json(error.message);
    }
  }
);
