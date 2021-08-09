import { PencilIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import Rating from 'react-rating';
import { Link as ScrollLink } from 'react-scroll';
import { getUSD } from '../../../../lib/currency';
import AttributeList from '../Attribute/AttributeList';
import ImgCarousel from '../../../../components/ImgCarousel/ImgCarousel';
import styles from './Details.module.css';
import DimensionsTable from '../Dimensions/Dimensions';
import { Review, Surfboard } from '../../../../../types/surfboard';

type SurfboardDetailsProps = {
  item: Surfboard;
  reviews: Review[];
  setIsAddReviewOpen: (isAddReviewOpen: boolean) => void;
};

const SurfboardDetails = ({
  item,
  reviews,
  setIsAddReviewOpen,
}: SurfboardDetailsProps) => {
  const [showAttributes, setShowAttributes] = useState(true);
  const avgRating =
    reviews.length > 0
      ? reviews.reduce((a, b) => a + b.rating.overall, 0) / reviews.length
      : 0;

  const cost = getUSD(item.price);
  return (
    <div className='flex flex-col sm:flex-row w-full pt-4 pb-16 relative'>
      <div
        className={`w-full relative block sm:sticky sm:top-0 sm:w-1/2 ${styles.img}`}
      >
        <ImgCarousel images={item.images} />
      </div>
      <div className='p-5 w-full sm:w-1/2 flex flex-col bg-gray-100'>
        <h2 className='text-xl font-bold mb-2'>{item.brand}</h2>
        <h4 className='text-lg font-normal mb-2'>{item.model}</h4>
        <div className='flex mb-2'>
          <Rating
            readonly
            initialRating={avgRating}
            emptySymbol={<StarIcon className='h-4 w-4 text-gray-400' />}
            fullSymbol={<StarIcon className='h-4 w-4 text-teal-500' />}
          />
          <span className='text-xs leading-5 pl-1'>{avgRating}</span>
        </div>
        <div className='flex mb-4'>
          <ScrollLink to='reviews' smooth className={styles['review-btn']}>
            <span className='mr-1 text-teal-500 '>({item.reviews.length})</span>
            <span>Reviews</span>
          </ScrollLink>
          {/* On click toggle review modal */}
          <div
            className={styles['review-btn']}
            onClick={() => setIsAddReviewOpen(true)}
          >
            <PencilIcon className='h-5 w-5 text-teal-500 mr-1' />
            <span>Write a Review</span>
          </div>
        </div>

        <p className='mb-4 text-sm'>{item.description}</p>
        <ul className='flex border-b border-gray-200 mb-4'>
          <li
            onClick={() => setShowAttributes(true)}
            className={`mr-6 pb-3 cursor-pointer ${
              showAttributes
                ? 'text-teal-500 border-b border-teal-500'
                : 'text-gray-500 hover:text-gray-400'
            }`}
          >
            Attributes
          </li>
          <li
            onClick={() => setShowAttributes(false)}
            className={`mr-6 pb-3 cursor-pointer ${
              showAttributes
                ? 'text-gray-500 hover:text-gray-400'
                : 'text-teal-500 border-b border-teal-500'
            }`}
          >
            Dimensions
          </li>
        </ul>

        {showAttributes ? (
          <AttributeList item={item} />
        ) : (
          <DimensionsTable dimensions={item.dimensions} />
        )}
      </div>
    </div>
  );
};

export default SurfboardDetails;
