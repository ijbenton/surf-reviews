import { surfboards } from './../../../data/surfboards';
import dbConnect from '../../../utils/db';
import type { NextApiRequest, NextApiResponse } from 'next';
import Surfboard from '../../../models/Surfboard';
import Review from '../../../models/Review';

dbConnect();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        console.log('surfboards');
        const surfboards = await Surfboard.find({}).populate('reviews');
        res.status(200).json({ success: true, data: surfboards });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;
    case 'POST':
      try {
        const surfboard = await Surfboard.create(req.body);

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
