import Image from 'next/image';
import styles from '../styles/MyComponent.module.css';
import electronic_circuit_bord from '../../public/electronic_circuit_bord.png';
import ProductCard from '../components/ProductCart';

const products = [
  {
    id: 1,
    heading: 'Laptop 1',
    name: 'MacBook Pro 15-inch',
    image: '/alienware1.png',
    price: 999,
    rating: 4.5,
    totalRating: 15,
  },
  {
    id: 2,
    heading: 'Laptop 2',
    name: 'MacBook Pro 15-inch',
    image: '/alienware1.png',
    price: 1499,
    rating: 4.8,
    totalRating: 15,
  },
  {
    id: 3,
    heading: 'Laptop 3',
    name: 'MacBook Pro 15-inch',
    image: '/alienware1.png',
    price: 9994,
    rating: 4.5,
    totalRating: 15,
  },
  {
    id: 4,
    heading: 'Laptop 4',
    name: 'MacBook Pro 15-inch',
    image: '/alienware1.png',
    price: 14991,
    rating: 4.8,
    totalRating: 15,
  },
  {
    id: 5,
    heading: 'Laptop 5',
    name: 'MacBook Pro 15-inch',
    image: '/alienware1.png',
    price: 9996,
    rating: 4.5,
    totalRating: 15,
  },
  {
    id: 6,
    heading: 'Laptop 6',
    name: 'MacBook Pro 15-inch',
    image: '/alienware1.png',
    price: 1499,
    rating: 4.8,
    totalRating: 15,
  },
];

export default function Products() {
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
              image='/alienware1.png'
              title='Headphone-128K'
              //   onButtonClick={handleViewButtonClick}
            />
            <ProductCard
              image='/alienware1.png'
              title='Headphone-128K'
              //   onButtonClick={handleViewButtonClick}
            />
            <ProductCard
              image='/alienware1.png'
              title='Headphone-128K'
              //   onButtonClick={handleViewButtonClick}
            />
            <ProductCard
              image='/alienware1.png'
              title='Headphone-128K'
              //   onButtonClick={handleViewButtonClick}
            />
            <ProductCard
              image='/alienware1.png'
              title='Headphone-128K'
              //   onButtonClick={handleViewButtonClick}
            />
            <ProductCard
              image='/alienware1.png'
              title='Headphone-128K'
              //   onButtonClick={handleViewButtonClick}
            />
            <ProductCard
              image='/alienware1.png'
              title='Headphone-128K'
              //   onButtonClick={handleViewButtonClick}
            />
            <ProductCard
              image='/alienware1.png'
              title='Headphone-128K'
              //   onButtonClick={handleViewButtonClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
