import { surfboards } from './../../../data/surfboards';
import dbConnect from '../../../server/lib/db';
import type { NextApiRequest, NextApiResponse } from 'next';
import Surfboard from '../../../server/models/Surfboard';
import Review from '../../../server/models/Review';

dbConnect();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const surfboards = await Surfboard.find({}).populate({
          path: 'reviews',
          model: Review,
        });
        res.status(200).json({ success: true, data: surfboards });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;
    case 'POST':
      try {
        let surfboard = await Surfboard.create(req.body);
        surfboard = await surfboard
          .populate({ path: 'reviews', model: Review })
          .execPopulate();

        res.status(201).json({ success: true, data: surfboard });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
