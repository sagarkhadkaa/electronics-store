import Image from 'next/image';
import NavBar from './components/NavBar';
import styles from './styles/MyComponent.module.css';
import electronic_circuit_bord from '../public/electronic_circuit_bord.png';

export default function Home() {
  return (
    <div className='flex flex-col items-center '>
      <NavBar />
      <div className='relative flex items-center justify-center bg-black'>
        <Image
          src={electronic_circuit_bord}
          width={1920}
          height={594}
          alt='electronic_circuit_borad'
          style={{
            minHeight: '35vh',
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
                  src='./forwardArrow.svg'
                  width={24}
                  height={24}
                  alt='forward Arrow'
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
