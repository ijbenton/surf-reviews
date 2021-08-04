import dbConnect from '../../../../utils/db';
import type { NextApiRequest, NextApiResponse } from 'next';
import Surfboard from '../../../../models/Surfboard';

dbConnect();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    method,
    query: { slug },
  } = req;

  switch (method) {
    case 'GET':
      try {
        const surfboard = await Surfboard.findOne({ slug }).populate('reviews');

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
    case 'PUT':
      try {
        const surfboard = await Surfboard.findOneAndUpdate({ slug }, req.body, {
          new: true,
          runValidators: true,
        }).populate('reviews');

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
        const deletedSurfboard = await Surfboard.deleteOne({ slug });

        if (!deletedSurfboard) {
          return res
            .status(400)
            .json({ success: false, message: 'No surfboard found' });
        }

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
