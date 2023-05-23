'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation]);

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
}

interface ProductSliderProps {
  products: Product[];
}

const ProductSlider: React.FC<ProductSliderProps> = ({ products }) => {
  console.log(products);
  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
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
      navigation
      loop
      loopedSlides={products.length}
      className='flex mt-4'
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <div className='bg-white flex flex-col p-4 border border-red-500 mx-6 sm:mx-2 md:mx-6'>
            <div className='relative w-full mb-2 rounded-md'>
              <Image
                src={product.image}
                alt={product.name}
                height={100}
                width={100}
                className='rounded-md'
              />
            </div>

            <h2 className='text-lg font-semibold'>{product.name}</h2>
            <p className='text-gray-500'>Price: ${product.price}</p>
            <div className='flex items-center mt-2'>
              <span className='text-yellow-500'>Rating:</span>
              <span className='ml-1'>{product.rating}</span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductSlider;
