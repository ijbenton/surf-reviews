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

type ImgCarouselProps = {
  images: string[];
};

const ImgCarousel = ({ images }: ImgCarouselProps) => {
  return (
    <Swiper loop navigation={true} className={styles.swiper}>
      <>
        {images.map((img: string) => (
          <SwiperSlide key={img}>
            <Image
              src={img}
              className='object-contain'
              layout='fill'
              alt='surfboard'
            />
          </SwiperSlide>
        ))}
      </>
    </Swiper>
  );
};

export default ImgCarousel;
