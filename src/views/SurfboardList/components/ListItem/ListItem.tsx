import Image from 'next/image';
import React from 'react';
import Rating from 'react-rating';
import { Surfboard } from '../../../../../types/surfboard';
import styles from './ListItem.module.css';
import { StarIcon as FullStar } from '@heroicons/react/solid';
import Link from 'next/link';

interface SurfboardProps {
  item: Surfboard;
}

const SurfboardListItem = ({ item }: SurfboardProps) => {
  const itemAvgRating =
    item.reviews.reduce((a, b) => a + b.rating.overall, 0) /
    item.reviews.length;

  const getUSD = (cents: number) => {
    let dollars = cents / 100;
    return dollars.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  };

  const cost = getUSD(item.price);

  return (
    <div className={styles.item}>
      <div className={styles['item__container']}>
        <Link
          href='/surfboards/[category]/[slug]'
          as={`/surfboards/${item.category}/${item.slug}`}
        >
          <a>
            <div className='relative h-44'>
              <Image
                src={item.images[0]}
                layout='fill'
                alt={`${item.model} surfboard`}
                className='object-contain'
              />
            </div>
            <div className={styles.details}>
              <h2>{item.model}</h2>
              <p>{item.brand}</p>
              <Rating
                readonly
                initialRating={itemAvgRating}
                emptySymbol={<FullStar className='h-5 w-5 text-gray-400' />}
                fullSymbol={<FullStar className='h-5 w-5 text-teal-500' />}
              />
              <div>{cost}</div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default SurfboardListItem;
