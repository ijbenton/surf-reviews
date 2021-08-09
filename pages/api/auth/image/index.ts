import { getSession } from 'next-auth/client';
import dbConnect from '../../../../server/lib/db';
import type { NextApiRequest, NextApiResponse } from 'next';
import User from '../../../../server/models/User';
import multerMiddleware from '../../../../server/middleware/multer';
import path from 'path';
import DatauriParser from 'datauri/parser';
const parser = new DatauriParser();
import cloudinary from 'cloudinary';
import axios from 'axios';

const formatBufferTo64 = (file) =>
  parser.format(path.extname(file.originalname).toString(), file.buffer);

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_ID,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const cloudinaryUpload = (file) => cloudinary.v2.uploader.upload(file);

dbConnect();

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const session = await getSession({ req });
  if (session) {
    switch (method) {
      case 'PUT':
        try {
          await multerMiddleware(req, res);
          if (!req.file) {
            res.status(400).json({ success: false, message: 'No image' });
          }
          const file64 = formatBufferTo64(req.file);
          const uploadResult = await cloudinaryUpload(file64.content);

          const user = await User.findOneAndUpdate(
            { email: session.user?.email },
            {
              image: uploadResult.secure_url,
            },
            { new: true, runValidators: true }
          );

          if (!user) {
            res.status(400).json({ success: false });
          }
          res.status(200).json({ success: true, data: user });
        } catch (error) {
          res.status(400).json({ success: false });
        }
        break;
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
