import dbConnect from '../../../../../server/lib/db';
import type { NextApiRequest, NextApiResponse } from 'next';
import Surfboard from '../../../../../server/models/Surfboard';
import Review from '../../../../../server/models/Review';
import User from '../../../../../server/models/User';

dbConnect();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    method,
    query: { slug, category },
  } = req;

  switch (method) {
    case 'GET':
      try {
        const surfboard = await Surfboard.findOne({ slug, category });

        if (!surfboard) {
          return res
            .status(400)
            .json({ success: false, message: 'No surfboard found' });
        }

        const reviews = await Review.find({
          surfboard: surfboard._id,
        }).populate({
          path: 'user',
          model: User,
        });

        const surfboardWithReviews = { ...surfboard._doc, reviews };

        res.status(200).json({ success: true, data: surfboardWithReviews });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;
    case 'PUT':
      try {
        const surfboard = await Surfboard.findOneAndUpdate(
          { slug, category },
          req.body,
          {
            new: true,
            runValidators: true,
          }
        ).populate({ path: 'reviews', model: Review });

        if (!surfboard) {
          return res
            .status(400)
            .json({ success: false, message: 'No surfboard found' });
        }

        res.status(200).json({ success: true, data: surfboard });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;
    case 'DELETE':
      try {
        const surfboard = await Surfboard.findOne({ slug, category });

        if (!surfboard) {
          return res
            .status(400)
            .json({ success: false, message: 'No surfboard found' });
        }

        surfboard.remove();

        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
