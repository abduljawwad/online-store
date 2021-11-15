import express, { Request, Response } from 'express';
import { Review } from '../models/review';

const router = express.Router();

export const createReview = router.post(
  '/createreview/:id',
  async (req: Request, res: Response) => {
    const { id: product_id } = req.params;
    try {
      const record = await Review.create({ ...req.body, product_id });
      await res.json({
        record,
        msg: 'dB entry successfully created in product table',
      });
    } catch (error: any) {
      await res.json(error.message);
    }
  }
);

export const getAllReviews = router.get(
  '/getreviews',
  async (req: Request, res: Response) => {
    try {
      const reviews = await Review.findAll({});
      res.json(reviews);
    } catch (error: any) {
      await res.json(error.message);
    }
  }
);

export const updateReview = router.put(
  '/updatereview',
  async (req: Request, res: Response) => {
    const { id } = req.body;
    try {
      const review = await Review.update(
        { ...req.body },
        {
          where: {
            id,
          },
        }
      );
      res.json(review);
    } catch (error: any) {
      await res.json(error.message);
    }
  }
);

export const deleteReview = router.delete(
  '/deletereview',
  async (req: Request, res: Response) => {
    const { id } = req.body;
    try {
      const review = await Review.destroy({
        where: {
          id,
        },
      });
      res.json(review);
    } catch (error: any) {
      await res.json(error.message);
    }
  }
);
