import React, { useState, useEffect, useRef } from 'react';
import { useSession, getSession } from 'next-auth/client';
import { server } from '../config';
import router from 'next/router';
import Image from 'next/image';
import { PencilIcon } from '@heroicons/react/outline';
import styles from '../styles/Account.module.css';
import axios from 'axios';
import Spinner from '../components/Spinner/Spinner';

const AccountPage = ({ user }) => {
  const imgInputRef = useRef(null);
  const [isImgUploading, setIsImgUploading] = useState(false);
  const [newImg, setNewImg] = useState(null);
  // const saveData = (data) => {
  //   axios.put('/api/auth/image', data).then((res) => {
  //     if (
  //       res.data.data.image !== newImg &&
  //       res.data.data.image !== user.image
  //     ) {
  //       setNewImg(res.data.data.image);
  //       setIsImgUploading(false);
  //     }
  //     getSession().then((session) => {
  //       updateSession(session);
  //     });
  //   });
  // };

  const imgClickHandler = () => {
    imgInputRef.current.click();
  };

  const imgUploadHandler = (e) => {
    if (e.target.files[0]) {
      setIsImgUploading(true);
      const formData = new FormData();
      formData.append('image', e.target.files[0]);

      axios.put('/api/auth/image', formData).then((res) => {
        if (
          res.data.data.image !== newImg &&
          res.data.data.image !== user.image
        ) {
          setNewImg(res.data.data.image);
          setIsImgUploading(false);
        }
      });
    }
  };
  return (
    <div className='text-center space-y-5'>
      <h1 className='text-2xl font-semibold mt-5'>Edit Profile</h1>
      <div className='relative'>
        <>
          {isImgUploading ? (
            <div className=' h-32 w-32'>
              <Spinner />
            </div>
          ) : (
            <>
              <Image
                height='128'
                width='128'
                className='rounded-full'
                src={`${newImg || user?.image || '/avatar.png'}`}
                alt='profile picture'
              />
              <div
                className={styles['img-edit-icon']}
                onClick={imgClickHandler}
              >
                <PencilIcon className='h-4 w-4' />
              </div>
            </>
          )}
        </>
      </div>
      <input
        type='file'
        accept='.jpg, .png, .jpeg'
        id='img'
        ref={imgInputRef}
        onChange={imgUploadHandler}
        className='hidden'
      />
      <h3>{user.name}</h3>
      <h5>{user.email}</h5>
    </div>
  );
};

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
