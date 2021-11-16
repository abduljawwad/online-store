import express, { Request, Response } from 'express';
import { Transaction } from 'sequelize/types';
import db from '../config/db.config';
import { Description } from '../models/description';

const router = express.Router();

export const createDescription = router.post(
  '/createdescription/:id',
  async (req: Request, res: Response) => {
    const { id: product_id } = req.params;
    try {
      const record = db.transaction(async (t: Transaction) => {
        await Description.create(
          { ...req.body, product_id },
          { transaction: t }
        );
      });
      await res
        .send({
          record,
          msg: 'dB entry successfully created in product table',
        })
        .status(201);
    } catch (error: any) {
      await res.send(error.message).status(404);
    }
  }
);

export const getAllDescriptions = router.get(
  '/getdescriptions',
  async (req: Request, res: Response) => {
    try {
      const descriptions = await Description.findAll({});
      await res.send(descriptions).status(200);
    } catch (error: any) {
      await res.send(error.message).status(404);
    }
  }
);

export const updateDescription = router.put(
  '/updatedescription',
  async (req: Request, res: Response) => {
    const { id } = req.body;
    try {
      const description = await db.transaction(async (t: Transaction) => {
        await Description.update(
          { ...req.body },
          {
            where: {
              id,
            },
          }
        );
      });
      await res.send(description).status(200);
    } catch (error: any) {
      await res.send(error.message).status(404);
    }
  }
);

export const deleteDescription = router.delete(
  '/deletedescription',
  async (req: Request, res: Response) => {
    const { id } = req.body;
    try {
      const description = await db.transaction(async (t: Transaction) => {
        await Description.destroy({
          where: {
            id,
          },
        });
      });

      await res.send(description).status(200);
    } catch (error: any) {
      await res.send(error.message).status(404);
    }
  }
);
