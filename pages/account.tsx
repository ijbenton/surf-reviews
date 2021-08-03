import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/client';
import { server } from '../config';

const AccountPage = () => {
  const [session, loading] = useSession();
  const [content, setContent] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${server}/api/secret`);
      const json = await res.json();

      if (json.data) {
        setContent(json.data);
      } else {
        setContent(json.msg);
      }
    };
    fetchData();
  }, [session]);

  if (typeof window !== 'undefined' && loading) return null;

  if (!session) {
    return (
      <div>
        <h1>Not signed in.</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>Protected Page</h1>
      <p>{content}</p>
    </div>
  );
};

export default AccountPage;
