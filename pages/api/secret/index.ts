import { getSession } from 'next-auth/client';

export default async (req, res) => {
  const session = await getSession({ req });
  if (session) {
    res.status(200).json({
      success: true,
      data: 'Welcome to the secret page',
    });
  } else {
    res.status(400).json({
      success: false,
      msg: 'You need to be signed in.',
    });
  }
};
