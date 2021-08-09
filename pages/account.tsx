import React from 'react';
import { getSession } from 'next-auth/client';
import AccountView from '../src/views/Account/Account';

const AccountPage = ({ user }) => <AccountView user={user} />;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session?.user) {
    return {
      redirect: {
        destination: '/api/auth/signin',
        permanent: false,
      },
    };
  }

  return {
    props: { user: session.user },
  };
};

export default AccountPage;
