import express, { Request, Response } from 'express';
import { Description } from '../models/description';

const router = express.Router();

export const createDescription = router.post(
  '/createdescription/:id',
  async (req: Request, res: Response) => {
    const { id: product_id } = req.params;
    try {
      const record = await Description.create({ ...req.body, product_id });
      await res.json({
        record,
        msg: 'dB entry successfully created in product table',
      });
    } catch (error: any) {
      await res.json(error.message);
    }
  }
);

export const getAllDescriptions = router.get(
  '/getdescriptions',
  async (req: Request, res: Response) => {
    try {
      const descriptions = await Description.findAll({});
      res.json(descriptions);
    } catch (error: any) {
      await res.json(error.message);
    }
  }
);

export const updateDescription = router.put(
  '/updatedescription',
  async (req: Request, res: Response) => {
    const { id } = req.body;
    try {
      const description = await Description.update(
        { ...req.body },
        {
          where: {
            id,
          },
        }
      );
      res.json(description);
    } catch (error: any) {
      await res.json(error.message);
    }
  }
);

export const deleteDescription = router.delete(
  '/deletedescription',
  async (req: Request, res: Response) => {
    const { id } = req.body;
    try {
      const description = await Description.destroy({
        where: {
          id,
        },
      });
      res.json(description);
    } catch (error: any) {
      await res.json(error.message);
    }
  }
);
