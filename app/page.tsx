'use client';
import Image from 'next/image';
import styles from './styles/MyComponent.module.css';
import electronic_circuit_bord from '../public/electronic_circuit_bord.png';
import ProductSlider from './components/ProductSlider';
import ProductCard from './components/ProductCart';
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

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        console.log('data', data);

        const selectedProducts = data.products.slice(0, 12).map((item: any) => {
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

  console.log(products);
  const handleViewButtonClick = () => {
    // Handle the view button click event
  };
  return (
    <div className='bg-deepPurple flex flex-col items-center '>
      {/* Logo Electonics & featured products  */}
      <div className='relative flex flex-col items-center justify-center bg-black'>
        <Image
          src={electronic_circuit_bord}
          width={1920}
          height={594}
          alt='electronic_circuit_borad'
          style={{
            minHeight: '60vh',
            width: '100vw',
            objectFit: 'cover',
            opacity: '0.61',
          }}
        />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:w-3/5 w-3/4'>
          {/* Logo Electronics */}
          <div
            className={`${styles.text_shadow} font-routhem font-normal text-fuchsia text-center text-base sm:text-3xl lg:text-6xl`}
          >
            Logo Electronics
          </div>
          {/* The techies you love */}
          <div className='flex items-center justify-center  mt-2'>
            <hr
              className={`${styles.linear_gradient_yellow} w-1/6 md:w-1/4 mr-2 `}
            />
            <div className='font-HAMMERHEAD text-xs sm:text-sm lg:text-xl text-center text-white'>
              The techies you love
            </div>
            <hr
              className={`${styles.linear_gradient_yellow} w-1/6 md:w-1/4 ml-2`}
            />
          </div>

          {/* view all products */}
          <div className='flex flex-row justify-center mt-6 '>
            <div
              className={`${styles.box} ${styles.box_with_bold_border}  flex text-xl text-white text-center `}
            >
              <button className='flex flex-row justify-center items-center px-2 py-1'>
                <div
                  className={`font-HAMMERHEAD  text-xs md:text-xl text-center text-white mr-2 md:mr-6`}
                >
                  view all products
                </div>
                <Image
                  src='./nextArrow.svg'
                  width={24}
                  height={24}
                  alt='forward Arrow'
                />
              </button>
            </div>
          </div>
        </div>
        <div className='absolute container mx-auto'>
          <ProductSlider products={products} />
        </div>
      </div>

      {/* Products section  */}
      <div>
        <div
          className={`z-20 my-[180px] font-routhem font-normal text-fuchsia text-center text-base sm:text-3xl lg:text-6xl`}
        >
          Products
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
