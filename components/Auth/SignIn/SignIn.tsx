import React, { Fragment, useEffect, useState } from 'react';
import { getProviders, signIn, getCsrfToken } from 'next-auth/client';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import {
  FaFacebookSquare,
  FaGithub,
  FaTwitter,
  FaGoogle,
} from 'react-icons/fa';
import Logo from '../../Logo/Logo';
import styles from './SignIn.module.css';

const fetchProviders = async () => {
  const providers = await getProviders();
  return providers;
};

const fetchCsrfToken = async () => {
  const csrfToken = await getCsrfToken();
  return csrfToken;
};

export default function SignInModal({ isOpen, setIsOpen }) {
  const [providers, setProviders] = useState<any>(null);
  const [csrfToken, setCsrfToken] = useState<any>(null);
  useEffect(() => {
    fetchProviders().then((res) => setProviders(res));
    fetchCsrfToken().then((res) => setCsrfToken(res));
  }, []);
  return (
    <>
      {providers && (
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog
            as='div'
            className='fixed inset-0 z-10 overflow-y-auto'
            onClose={() => setIsOpen(false)}
          >
            <div className='min-h-screen px-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <Dialog.Overlay className='fixed inset-0 bg-gray-400 bg-opacity-80 transition-opacity' />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className='inline-block h-screen align-middle'
                aria-hidden='true'
              >
                &#8203;
              </span>

              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <div className='inline-block relative w-full max-w-sm sm:max-w-md p-6 my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl'>
                  <div
                    className={`${styles.logo} shadow-xl inline-block absolute z-50 rounded-full p-2 bg-white`}
                  >
                    <Logo className='text-black w-16 h-16' />
                  </div>
                  <div className='flex justify-between mt-2 mb-4'>
                    <Dialog.Title
                      as='h3'
                      className=' text-3xl font-medium leading-6'
                    >
                      Sign In
                    </Dialog.Title>
                    <button
                      type='button'
                      className='focus:outline-none'
                      onClick={() => setIsOpen(false)}
                    >
                      <XIcon className='w-6 h-6 text-gray-500' />
                    </button>
                  </div>
                  <form
                    method='post'
                    action='/api/auth/signin/email'
                    className='flex flex-col'
                  >
                    <input
                      name='csrfToken'
                      type='hidden'
                      defaultValue={csrfToken}
                    />
                    <label htmlFor='email'>Email</label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      placeholder='hello@surf.com'
                      required
                      className='border border-gray-300 p-2 mb-2'
                    />
                    <button
                      type='submit'
                      className={`${styles.providerBtn} ${styles.email} mb-2`}
                    >
                      <span className={styles.providerName}>
                        Sign in with Email
                      </span>
                    </button>
                  </form>
                  <div className='flex justify-center items-center'>
                    <div className='w-1/6 h-0 border-b border-gray-500 mr-2'></div>
                    <p className='font-semibold text-gray-600'>Or</p>
                    <div className='w-1/6 h-0 border-b border-gray-500 ml-2'></div>
                  </div>
                  <div className='mt-2 text-white'>
                    <div className='flex mb-2'>
                      <button
                        onClick={() => signIn(providers.google.id)}
                        className={`${styles.providerBtn} ${styles.google}`}
                      >
                        <div
                          className={`${styles.providerLogo} ${styles.googleDark}`}
                        >
                          <FaGoogle size={20} />
                        </div>
                        <span className={styles.providerName}>
                          {providers.google.name}
                        </span>
                      </button>
                      <button
                        onClick={() => signIn(providers.facebook.id)}
                        className={`${styles.providerBtn} ${styles.facebook}`}
                      >
                        <div
                          className={`${styles.providerLogo} ${styles.facebookDark}`}
                        >
                          <FaFacebookSquare size={20} />
                        </div>
                        <span className={styles.providerName}>
                          {providers.facebook.name}
                        </span>
                      </button>
                    </div>
                    <div className='flex'>
                      <button
                        onClick={() => signIn(providers.twitter.id)}
                        className={`${styles.providerBtn} ${styles.twitter}`}
                      >
                        <div
                          className={`${styles.providerLogo} ${styles.twitterDark}`}
                        >
                          <FaTwitter size={20} />
                        </div>
                        <span className={styles.providerName}>
                          {providers.twitter.name}
                        </span>
                      </button>
                      <button
                        onClick={() => signIn(providers.github.id)}
                        className={`${styles.providerBtn} ${styles.github}`}
                      >
                        <div
                          className={`${styles.providerLogo} ${styles.githubDark}`}
                        >
                          <FaGithub size={20} />
                        </div>
                        <span className={styles.providerName}>
                          {providers.github.name}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      )}
    </>
  );
}
