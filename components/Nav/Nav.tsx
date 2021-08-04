/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react';
import Image from 'next/image';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Logo from '../Logo/Logo';
import CustomLink from '../Link/Link';
import NextLink from 'next/link';
import styles from './Nav.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { signIn, signOut, useSession } from 'next-auth/client';
import SignInModal from '../Auth/SignIn/SignIn';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Surfboards', href: '/surfboards' },
  { name: 'Brands', href: '/brands' },
];

const Nav = (): JSX.Element => {
  // console.log(session);
  const [session, loading] = useSession();
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  return (
    <>
      <Disclosure as='nav' className={styles.nav}>
        {({ open }) => (
          <>
            <div className={styles['nav__container']}>
              <div className='relative flex items-center justify-between h-16'>
                <div className='flex items-center sm:items-stretch'>
                  <div className={styles.nav__brand}>
                    <Logo />
                    <h1>Surf Reviews</h1>
                  </div>
                  <div className={styles['nav__desktop-links']}>
                    <ul>
                      {navigation.map((item) => (
                        <li key={item.name}>
                          <CustomLink
                            href={item.href}
                            activeClassName={styles['nav__link--active']}
                          >
                            <a className={styles['nav__link']}>{item.name}</a>
                          </CustomLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={styles['nav__controls']}>
                  {/* Search Bar */}
                  <SearchBar />
                  {/* Profile dropdown */}
                  <Menu as='div' className={styles['nav__profile']}>
                    {({ open }) => (
                      <>
                        <div>
                          <Menu.Button className={styles['nav__profile-btn']}>
                            <span className='sr-only'>Open user menu</span>
                            <Image
                              height='32'
                              width='32'
                              className='rounded-full'
                              src={`${session?.user?.image || '/avatar.png'}`}
                              alt='profile picture'
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          show={open}
                          as={Fragment}
                          enter='transition ease-out duration-100'
                          enterFrom='transform opacity-0 scale-95'
                          enterTo='transform opacity-100 scale-100'
                          leave='transition ease-in duration-75'
                          leaveFrom='transform opacity-100 scale-100'
                          leaveTo='transform opacity-0 scale-95'
                        >
                          <Menu.Items
                            static
                            as='ul'
                            className={styles['nav__profile-items']}
                          >
                            {session ? (
                              <>
                                <Menu.Item>
                                  {({ active }) => (
                                    <li
                                      className={`${
                                        styles['nav__profile-item']
                                      } ${active ? 'bg-gray-100' : ''}`}
                                    >
                                      <NextLink href='/account'>
                                        <a className='block px-4 py-2'>
                                          Your Profile
                                        </a>
                                      </NextLink>
                                    </li>
                                  )}
                                </Menu.Item>
                                <Menu.Item>
                                  {({ active }) => (
                                    <li
                                      className={`${
                                        styles['nav__profile-item']
                                      } ${active ? 'bg-gray-100' : ''}`}
                                    >
                                      <span
                                        onClick={() => signOut()}
                                        className='block px-4 py-2 cursor-pointer'
                                      >
                                        Sign out
                                      </span>
                                    </li>
                                  )}
                                </Menu.Item>
                              </>
                            ) : (
                              <Menu.Item>
                                {({ active }) => (
                                  <li
                                    className={`${
                                      styles['nav__profile-item']
                                    } ${active ? 'bg-gray-100' : ''}`}
                                  >
                                    <div
                                      className='block px-4 py-2'
                                      onClick={() => setIsSignInOpen(true)}
                                      // onClick={() => signIn()}
                                    >
                                      Sign In
                                    </div>
                                  </li>
                                )}
                              </Menu.Item>
                            )}
                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                  </Menu>
                </div>
                <div className='flex justify-self-end items-center sm:hidden'>
                  {/* Mobile menu button*/}
                  <Disclosure.Button className={styles['nav__mobile-menu-btn']}>
                    <span className='sr-only'>Open main menu</span>
                    {open ? (
                      <XIcon className='block h-6 w-6' aria-hidden='true' />
                    ) : (
                      <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className={styles['nav__mobile-links']}>
              <div className='flex flex-col'>
                <ul>
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <CustomLink
                        href={item.href}
                        activeClassName={styles['nav__link--active']}
                      >
                        <a className={styles['nav__link-mobile']}>
                          {item.name}
                        </a>
                      </CustomLink>
                    </li>
                  ))}
                </ul>

                <div className={styles['nav__mobile-profile']}>
                  {session ? (
                    <>
                      <div className={styles['nav__mobile-account']}>
                        <Image
                          height='36'
                          width='36'
                          className='rounded-full mr-2'
                          src={`${session?.user?.image || '/avatar.png'}`}
                          alt='profile picture'
                        />
                        <div className={styles['nav__mobile-account-details']}>
                          <h2 className='text-white'>{session.user?.name}</h2>
                          <span className='text-gray-500 text-xs'>
                            {session.user?.email}
                          </span>
                        </div>
                      </div>
                      <CustomLink href='/account' activeClassName=''>
                        <a
                          href='#'
                          className='text-gray-500 text-normal py-2 block'
                        >
                          Your Profile
                        </a>
                      </CustomLink>
                      <div
                        onClick={() => signOut()}
                        className='text-gray-500 text-normal py-2 block'
                      >
                        Sign out
                      </div>
                    </>
                  ) : (
                    <>
                      <div
                        onClick={() => signIn()}
                        className='text-gray-500 text-normal py-2 block'
                      >
                        Sign In
                      </div>
                    </>
                  )}
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <SignInModal isOpen={isSignInOpen} setIsOpen={setIsSignInOpen} />
    </>
  );
};

export default Nav;
