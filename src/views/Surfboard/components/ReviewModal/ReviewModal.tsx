import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import React, { Fragment } from 'react';
import ReviewForm from '../ReviewForm/ReviewForm';

interface ReviewModalProps {
  isOpen: boolean;
  setIsOpen: (i: boolean) => void;
  setReviews: any;
  session: any;
}

const ReviewModal = ({
  isOpen,
  setIsOpen,
  setReviews,
  session,
}: ReviewModalProps) => {
  return (
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
            <div className='inline-block w-full max-w-sm sm:max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl'>
              <div className='flex justify-between'>
                <Dialog.Title as='h3' className='text-lg font-medium leading-6'>
                  Write Your Own Review
                </Dialog.Title>
                <button
                  type='button'
                  className='focus:outline-none'
                  onClick={() => setIsOpen(false)}
                >
                  <XIcon className='w-6 h-6 text-gray-500' />
                </button>
              </div>

              <ReviewForm
                setIsModalOpen={setIsOpen}
                setReviews={setReviews}
                session={session}
              />
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ReviewModal;
