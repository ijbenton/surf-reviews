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
        const surfboard = await Surfboard.findOne({ slug });

        if (!surfboard) {
          res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: surfboard });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'PUT':
      try {
        const surfboard = await Surfboard.findOneAndUpdate({ slug }, req.body, {
          new: true,
          runValidators: true,
        });

        if (!surfboard) {
          res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: surfboard });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'DELETE':
      try {
        const deletedSurfboard = await Surfboard.deleteOne({ slug });

        if (!deletedSurfboard) {
          res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
