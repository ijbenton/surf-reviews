import dbConnect from '../../../utils/db';
import type { NextApiRequest, NextApiResponse } from 'next';
import Surfboard from '../../../models/Surfboard';

dbConnect();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const surfboards = await Surfboard.find({});

        res.status(200).json({ success: true, data: surfboards });
      } catch (error) {
        res.status(400).json({ success: false });
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
