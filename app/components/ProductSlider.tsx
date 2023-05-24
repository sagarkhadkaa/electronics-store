'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import styles from '../styles/MyComponent.module.css';
import StarRating from './StarRating';

SwiperCore.use([Navigation]);

type Product = {
  id: number;
  heading: string;
  name: string;
  image: string;
  price: number;
  rating: number;
  totalRating: number;
};

interface ProductSliderProps {
  products: Product[];
}

const ProductSlider: React.FC<ProductSliderProps> = ({ products }) => {
  const [slidesPerView, setSlidesPerView] = useState(4);
  const starGradient =
    'bg-gradient-to-l from-yellow-700 via-yellow-400 to-orange-700';

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 400) {
        setSlidesPerView(1);
      } else if (window.innerWidth <= 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(4);
      }
    };
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={slidesPerView}
      loop
      loopedSlides={products.length}
      className='flex top-[250px]'
      modules={[Navigation]}
      navigation={{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      }}
    >
      <Image
        src='./previousArrow.svg'
        width={64}
        height={64}
        alt='backward Arrow'
        className='swiper-button-prev h-10'
      />
      <Image
        src='./nextArrow.svg'
        width={64}
        height={64}
        alt='forward Arrow'
        className='swiper-button-next'
      />
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <div
            className={`${styles.linear_gradient_border_yellow} bg-white min-w-[180px] flex flex-col p-4 mx-2 lg:mx-6`}
          >
            <div className='relative w-full mb-2 rounded-md flex justify-center'>
              <Image
                src={product.image}
                alt={product.heading}
                height={100}
                width={100}
                className='rounded-md h-[100px] '
              />
            </div>

            <h2 className='text-lg font-semibold'>{product.heading}</h2>
            <p className='text-gray-500'>{product.name}</p>
            <p className='text-black font-semibold'>£{product.price}</p>
            <div className='flex items-center mt-2 text-sm md:text-xl'>
              <StarRating rating={product.rating} starColor={starGradient} />
              <span>&#40;{product.totalRating} &#41;</span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductSlider;
