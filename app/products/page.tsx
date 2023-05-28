'use client';
import Image from 'next/image';
import styles from '../styles/MyComponent.module.css';
import electronic_circuit_bord from '../../public/electronic_circuit_bord.png';
import ProductCard from '../components/ProductCart';
import { useEffect, useState } from 'react';

type Product = {
  id: number;
  heading: string;
  name: string;
  image: string;
  price: number;
  rating: number;
  totalRating: number;
};

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();

        const selectedProducts = data.products.slice(0, 16).map((item: any) => {
          return {
            id: item.id,
            heading: item.category,
            name: item.title,
            image: item.thumbnail,
            price: item.price,
            rating: item.rating,
            totalRating: item.stock,
          };
        });

        setProducts(selectedProducts);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchProducts();
  }, []);
  const handleViewButtonClick = () => {
    // Handle the view button click event
  };
  return (
    <div className='bg-deepPurple flex flex-col items-center '>
      <div className='relative flex flex-col items-center justify-center bg-black'>
        <Image
          src={electronic_circuit_bord}
          width={1920}
          height={594}
          alt='electronic_circuit_borad'
          style={{
            minHeight: '25vh',
            width: '100vw',
            objectFit: 'cover',
            opacity: '0.61',
          }}
        />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:w-3/5 w-3/4'>
          {/* Products */}
          <div
            className={`${styles.text_shadow} font-routhem font-normal text-fuchsia text-center text-base sm:text-3xl lg:text-6xl`}
          >
            Products
          </div>
        </div>
      </div>

      {/* Products section  */}
      <div>
        <div className={`z-20 mb-[180px] `}>
          <div className='mt-20 flex flex-wrap justify-center lg:px-[100px]'>
            <ProductCard
              products={products}
              //   onButtonClick={handleViewButtonClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
