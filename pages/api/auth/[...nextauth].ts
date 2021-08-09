import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import User from '../../../server/models/User';

const options = {
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60,
  },
  callbacks: {
    jwt: async (token, user, account, profile, isNewUser) => {
      return Promise.resolve(token);
    },
    session: async (session, token) => {
      // Keep session up to date
      const user = await User.findById(token.sub);
      session.user = user;
      session.user.id = token.sub;
      return Promise.resolve(session);
    },
  },
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Providers.Twitter({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET,
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Providers.Facebook({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    Providers.Email({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  database: process.env.MONGO_URI,
  theme: 'light',
};

export default (req, res) => NextAuth(req, res, options);
