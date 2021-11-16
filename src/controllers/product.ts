import express, { Request, Response } from 'express';
import { Product } from '../models/product';
import { Op } from 'sequelize';
import { Review } from '../models/review';
import { Description } from '../models/description';
import db from '../config/db.config';
import { Transaction } from 'sequelize/types';

const router = express.Router();

export const createProduct = router.post(
  '/create',
  async (req: Request, res: Response) => {
    try {
      const product = await db.transaction(async (t: Transaction) => {
        await Product.create({ ...req.body }, { transaction: t });
      });
      await res
        .send({
          product,
          msg: 'dB entry successfully created in product table',
        })
        .status(201);
    } catch (error: any) {
      await res.send(error.message).status(404);
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
      res.send(products).status(200);
    } catch (error: any) {
      await res.send(error.message).status(404);
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
      res.send(products).status(200);
    } catch (error: any) {
      await res.send(error.message).status(404);
    }
  }
);

export const updateProduct = router.put(
  '/:id',
  async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const products = await db.transaction(async (t: Transaction) => {
        await Product.update(
          { ...req.body },
          {
            where: {
              id,
            },
          }
        );
      });
      res.send(products).status(200);
    } catch (error: any) {
      await res.send(error.message).status(404);
    }
  }
);

export const deleteProduct = router.delete(
  '/:id',
  async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const products = await db.transaction(async (t: Transaction) => {
        await Product.destroy({
          where: {
            id,
          },
        });
      });
      return res.send(products).status(200);
    } catch (error: any) {
      await res.send(error.message).status(404);
    }
  }
);
