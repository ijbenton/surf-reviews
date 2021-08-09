import { getSession } from 'next-auth/client';
import dbConnect from '../../../server/lib/db';
import type { NextApiRequest, NextApiResponse } from 'next';
import User from '../../../server/models/User';

dbConnect();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const session = await getSession({ req });
  if (session) {
    switch (method) {
      case 'GET':
        try {
          const user = await User.findOne({ email: session.user?.email });
          if (!user) {
            res.status(400).json({ success: false });
          }
          res.status(200).json({ success: true, data: user });
        } catch (error) {
          res.status(400).json({ success: false });
        }
        break;
      //   case 'POST':
      //     try {
      //       const surfboard = await Surfboard.create(req.body);

      //       res.status(201).json({ success: true, data: surfboard });
      //     } catch (error) {
      //       res.status(400).json({ success: false });
      //     }
      //     break;
      default:
        res.status(400).json({ success: false });
        break;
    }
  } else {
    res.status(400).json({
      success: false,
      msg: 'You need to be signed in.',
    });
  }
}
