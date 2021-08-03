import React, { useState } from 'react';
import { surfboards } from '../../data/surfboards';
import styles from '../../styles/Surfboard.module.css';
import Rating from 'react-rating';
import { Link as ScrollLink } from 'react-scroll';
import { StarIcon } from '@heroicons/react/solid';
import { PencilIcon } from '@heroicons/react/outline';
import ImgCarousel from '../../components/ImgCarousel/ImgCarousel';
import ReviewModal from '../../components/Review/ReviewModal/ReviewModal';
import ReviewList from '../../components/Review/ReviewList/ReviewList';
import AttributeList from '../../components/Attribute/AttributeList';
import { getUSD } from '../../utils/currency';
import { server } from '../../config';
const SurfboardPage = ({ surfboard }) => {
  const [showAttributes, setShowAttributes] = useState(true);
  const [isAddReviewOpen, setIsAddReviewOpen] = useState(false);

  const avgRating =
    surfboard.reviews.length > 0
      ? surfboard.reviews.reduce((a, b) => a + b.rating.overall, 0) /
        surfboard.reviews.length
      : 0;

  const cost = getUSD(surfboard.price);
  return (
    <div>
      <div className='flex flex-col sm:flex-row w-full pt-4 pb-16 relative'>
        <div
          className={`w-full relative block sm:sticky sm:top-0 sm:w-1/2 ${styles.img}`}
        >
          <ImgCarousel item={surfboard} />
        </div>
        <div className='p-5 w-full sm:w-1/2 flex flex-col bg-gray-100'>
          <h2 className='text-xl font-bold mb-2'>{surfboard.brand}</h2>
          <h4 className='text-lg font-normal mb-2'>{surfboard.model}</h4>
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
              <span className='mr-1 text-teal-500 '>
                ({surfboard.reviews.length})
              </span>
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

          <p className='mb-4 text-sm'>{surfboard.description}</p>
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
            <AttributeList item={surfboard} />
          ) : (
            <table className='pt-3'>
              <thead>
                <tr>
                  <th className='border border-black py-2'>Height</th>
                  <th className='border border-black py-2'>Width</th>
                  <th className='border border-black py-2'>Thickness</th>
                  <th className='border border-black py-2'>Volume</th>
                </tr>
              </thead>
              <tbody>
                {surfboard.dimensions.map((dim, idx) => (
                  <tr key={idx}>
                    <td className='border border-black py-2 text-center'>
                      {dim.height}
                    </td>
                    <td className='border border-black py-2 text-center'>
                      {dim.width}
                    </td>
                    <td className='border border-black py-2 text-center'>
                      {dim.thickness}
                    </td>
                    <td className='border border-black py-2 text-center'>
                      {dim.volume}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      <ReviewList reviews={surfboard.reviews} model={surfboard.model} />
      <ReviewModal isOpen={isAddReviewOpen} setIsOpen={setIsAddReviewOpen} />
    </div>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/surfboards/${context.params.slug}`);

  const surfboard = await res.json();
  return {
    props: {
      surfboard: surfboard.data,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/surfboards`);

  const surfboards = await res.json();

  const slugs = surfboards.data.map((surfboard) => surfboard.slug);
  const paths = slugs.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default SurfboardPage;
