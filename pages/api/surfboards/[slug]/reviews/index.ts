import dbConnect from '../../../../../utils/db';
import type { NextApiRequest, NextApiResponse } from 'next';
import Surfboard from '../../../../../models/Surfboard';
import Review from '../../../../../models/Review';
import User from '../../../../../models/User';
import { getSession } from 'next-auth/client';
import { UserAddIcon } from '@heroicons/react/outline';

dbConnect();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    method,
    query: { slug },
  } = req;
  const session = await getSession({ req });

  switch (method) {
    case 'GET':
      try {
        const surfboard = await Surfboard.findOne({ slug }).populate('reviews');

        if (!surfboard) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: surfboard.reviews });
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
        const surfboard = await Surfboard.findOne({ slug }).populate('reviews');
        if (!surfboard) {
          return res.status(400).json({
            success: false,
            message: `No surfboard found with slug: ${slug}`,
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
          image: session.user?.image,
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
        const user = await User.findByIdAndUpdate(
          session?.user._id,
          { height, weight, age, skill },
          {
            new: true,
            runValidators: true,
          }
        );
        console.log(user);

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
