import express, { Request, Response } from 'express';
import { Transaction } from 'sequelize/types';
import db from '../config/db.config';
import { Review } from '../models/review';

const router = express.Router();

export const createReview = router.post(
  '/createreview/:id',
  async (req: Request, res: Response) => {
    const { id: product_id } = req.params;
    try {
      const review = await Review.create({ ...req.body, product_id });
      await res
        .send({
          review,
          msg: 'dB entry successfully created in product table',
        })
        .status(201);
    } catch (error: any) {
      await res.send(error.message).status(404);
    }
  }
);

export const getAllReviews = router.get(
  '/getreviews',
  async (req: Request, res: Response) => {
    try {
      const reviews = await Review.findAll({});
      await res.send(reviews).status(200);
    } catch (error: any) {
      await res.send(error.message).status(404);
    }
  }
);

export const updateReview = router.put(
  '/updatereview',
  async (req: Request, res: Response) => {
    const { id } = req.body;
    try {
      const review = await db.transaction(async (t: Transaction) => {
        await Review.update(
          { ...req.body },
          {
            where: {
              id,
            },
          }
        );
      });
      await res.send(review).status(200);
    } catch (error: any) {
      await res.send(error.message).status(404);
    }
  }
);

export const deleteReview = router.delete(
  '/deletereview',
  async (req: Request, res: Response) => {
    const { id } = req.body;
    try {
      const review = await db.transaction(async (t: Transaction) => {
        await Review.destroy({
          where: {
            id,
          },
        });
      });
      await res.send(review).status(200);
    } catch (error: any) {
      await res.send(error.message).status(404);
    }
  }
);
