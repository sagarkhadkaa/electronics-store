'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import styles from '../styles/MyComponent.module.css';

type Product = {
  id: number;
  name: string;
  image: string;
};

interface ProductProps {
  products: Product[];
  //   onButtonClick: () => void;
}

const ProductCard: React.FC<ProductProps> = ({
  products,
  //   onButtonClick,
}) => {
  const [liked, setLiked] = useState(false);

  const handleLikeToggle = () => {
    setLiked(!liked);
  };

  return (
    <>
      {products.map((product) => (
        <div
          key={product.id}
          className='relative bg-white rounded-lg shadow-md p-2 w-[250px] max-w-[250px] font-poppins mx-12 m-8'
        >
          <div
            className={` ${styles.yellow_gradient_text} absolute top-2 left-2 text-sm font-semibold`}
          >
            RUBI-128K
          </div>
          <button
            className={`absolute top-2 right-2 text-2xl focus:outline-none ${
              liked ? 'text-red-500' : 'text-white'
            }`}
            onClick={handleLikeToggle}
          >
            {liked ? '❤️' : '🤍'}
          </button>
          <div className='relative top-5'>
            <Image
              src={product.image}
              width={100}
              height={100}
              alt='product image'
              className='mx-auto w-40 h-40 rounded-md'
            />
          </div>
          <h3 className='text-center text-black mt-4 mb-2 text-lg'>
            {product.name.length <= 20
              ? product.name
              : product.name.slice(0, 20) + '...'}
          </h3>
          <button
            className={`font-HAMMERHEAD w-full rounded-3xl text-xl text-black py-2 px-4 block mx-auto hover:bg-blue-600`}
            // onClick={onButtonClick}
            style={{
              background: `linear-gradient(
				90deg,
				#920aa9 2%,
				#e019cc 20%,
				#ff81e3 48%,
				#fc75d6 52%,
				#df55f6 60%,
				#e822ec 71%,
				#e80f91 75%,
				#ee19d8 81.25%,
				#fe3873 100%
			  )`,
            }}
          >
            <div className='flex items-center justify-around'>
              View
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='h-8 w-8'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </div>
            </div>
          </button>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
