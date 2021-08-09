import dbConnect from '../../../../../../server/lib/db';
import type { NextApiRequest, NextApiResponse } from 'next';
import Surfboard from '../../../../../../server/models/Surfboard';
import Review from '../../../../../../server/models/Review';
import User from '../../../../../../server/models/User';
import { getSession } from 'next-auth/client';

dbConnect();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    method,
    query: { slug, category },
  } = req;
  const session = await getSession({ req });

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
        }).populate({ path: 'user', model: User });

        res.status(200).json({ success: true, data: reviews });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        if (!session) {
          return res.status(400).json({
            success: false,
            message: 'Please sign in to post a review',
          });
        }
        const surfboard = await Surfboard.findOne({ slug, category }).populate({
          path: 'reviews',
          model: Review,
        });
        if (!surfboard) {
          return res.status(400).json({
            success: false,
            message: `No surfboard found`,
          });
        }
        if (
          surfboard.reviews?.find((review) => review.user == session.user._id)
        ) {
          return res.status(400).json({
            success: false,
            message: `Sorry ${session?.user?.name}, you've already left a review for this surfboard!`,
          });
        }

        const body = {
          surfboard: surfboard._id,
          user: session?.user._id,
          ...req.body,
        };
        let review = await Review.create(body);

        if (!review) {
          res
            .status(400)
            .json({ success: false, message: 'Cannot create review' });
        }

        // Update user's details
        const { height, weight, age, skill } = req.body;
        await User.findByIdAndUpdate(
          session?.user._id,
          { height, weight, age, skill },
          {
            new: true,
            runValidators: true,
          }
        );
        review = await review
          .populate({ path: 'user', model: User })
          .execPopulate();

        res.status(200).json({ success: true, data: review });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
