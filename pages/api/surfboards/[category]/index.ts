import dbConnect from '../../../../server/lib/db';
import type { NextApiRequest, NextApiResponse } from 'next';
import Surfboard from '../../../../server/models/Surfboard';
import Review from '../../../../server/models/Review';
import User from '../../../../server/models/User';

dbConnect();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    method,
    query: { category },
  } = req;

  switch (method) {
    case 'GET':
      try {
        const surfboards = await Surfboard.find({ category }).populate({
          path: 'reviews',
          model: Review,
        });

        if (!surfboards) {
          return res
            .status(400)
            .json({ success: false, message: 'No surfboard found' });
        }

        res.status(200).json({ success: true, data: surfboards });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
