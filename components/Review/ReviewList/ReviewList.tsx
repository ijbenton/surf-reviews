import Image from 'next/image';
import React from 'react';
import { StarIcon } from '@heroicons/react/solid';
import styles from './ReviewList.module.css';
import { getFormattedDate } from '../../../utils/date';
import Rating from 'react-rating';
import { ReviewObj } from '../../../data/surfboards';

interface ReviewListProps {
  reviews: ReviewObj[];
  model: string;
}

const ReviewList = ({ reviews, model }: ReviewListProps) => {
  return (
    <div id='reviews' className='flex w-full flex-wrap bg-gray-100 p-4'>
      {reviews.map((review, idx) => (
        <div className={styles['review-card']} key={`review-${idx}`}>
          <h2 className='text-lg font-semibold mb-1'>{model}</h2>
          <h4 className='text-md font-normal mb-4'>{`${review.dimension.height} x ${review.dimension.width} x ${review.dimension.thickness} - ${review.dimension.volume}L`}</h4>
          <div className='flex relative w-full border-b-2 border-gray-100 pb-4 mb-4'>
            <Image
              className='rounded-full'
              src={review.image || '/avatar.png'}
              alt='profile picture'
              height={80}
              width={80}
            />
            <div className='ml-4 text-xs font-semibold'>
              <p className='mb-1'>Review by {review.name}</p>
              <p className='mb-1'>
                Age: {review.age} | Height: {review.height} | Weight:{' '}
                {review.weight} lbs
              </p>
              <p className='mb-1'>Skill: {review.skill}</p>
              <p>({getFormattedDate(new Date(review.createdAt))})</p>
            </div>
          </div>
          <div className='flex justify-between h-44'>
            <div className=' w-2/5 pr-4 space-y-1'>
              <div className='flex justify-between'>
                <p>Paddling</p>
                <Rating
                  readonly
                  initialRating={review.rating.paddling}
                  emptySymbol={<StarIcon className='h-4 w-4 text-gray-400' />}
                  fullSymbol={<StarIcon className='h-4 w-4 text-teal-500' />}
                />
              </div>
              <div className='flex justify-between'>
                <p>Quality</p>
                <Rating
                  readonly
                  initialRating={review.rating.quality}
                  emptySymbol={<StarIcon className='h-4 w-4 text-gray-400' />}
                  fullSymbol={<StarIcon className='h-4 w-4 text-teal-500' />}
                />
              </div>
              <div className='flex justify-between'>
                <p>Speed</p>
                <Rating
                  readonly
                  initialRating={review.rating.speed}
                  emptySymbol={<StarIcon className='h-4 w-4 text-gray-400' />}
                  fullSymbol={<StarIcon className='h-4 w-4 text-teal-500' />}
                />
              </div>
              <div className='flex justify-between'>
                <p>User Friendly</p>
                <Rating
                  readonly
                  initialRating={review.rating.userFriendly}
                  emptySymbol={<StarIcon className='h-4 w-4 text-gray-400' />}
                  fullSymbol={<StarIcon className='h-4 w-4 text-teal-500' />}
                />
              </div>
              <div className='flex justify-between border-b-2 border-gray-100 pb-1'>
                <p>Turning</p>
                <Rating
                  readonly
                  initialRating={review.rating.turning}
                  emptySymbol={<StarIcon className='h-4 w-4 text-gray-400' />}
                  fullSymbol={<StarIcon className='h-4 w-4 text-teal-500' />}
                />
              </div>
              <div className='flex justify-between'>
                <p className='font-semibold'>Overall</p>
                <Rating
                  readonly
                  initialRating={review.rating.overall}
                  emptySymbol={<StarIcon className='h-4 w-4 text-gray-400' />}
                  fullSymbol={<StarIcon className='h-4 w-4 text-teal-500' />}
                />
              </div>
            </div>
            <div className='w-3/5 pr-4 h-100 overflow-y-scroll scrollbar-thin scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-400'>
              <p>{review.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
