import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import styles from './ImgCarousel.module.css';

// import Swiper core and required modules
import SwiperCore, { Navigation } from 'swiper/core';
import Image from 'next/image';

// install Swiper modules
SwiperCore.use([Navigation]);

const ImgCarousel = ({ item }) => {
  return (
    <Swiper loop navigation={true} className={styles.swiper}>
      <>
        {item.images.map((img, idx) => (
          <SwiperSlide key={item.images[idx]}>
            <Image
              src={item.images[idx]}
              className='object-contain'
              layout='fill'
              alt={item.model}
            />
          </SwiperSlide>
        ))}
      </>
    </Swiper>
  );
};

export default ImgCarousel;
