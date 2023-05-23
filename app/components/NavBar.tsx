'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/MyComponent.module.css';

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const [selectedButton, setSelectedButton] = useState(1);

  const handleClick = (buttonId: number) => {
    setNavbar(!navbar);
    setSelectedButton(buttonId);
  };

  return (
    <div>
      <nav className='w-full bg-deepPurple fixed top-0 left-0 right-0 z-5'>
        <div className='justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 '>
          <div>
            <div className='flex items-center justify-between py-3 md:py-5 md:block'>
              {/* LOGO  */}
              <Link href='/'>
                <Image src='/LOGO.svg' width={70} height={70} alt='logo' />
              </Link>
              {/*  BUTTON FOR MOBILE */}
              <div className='md:hidden'>
                <button
                  className='p-2 rounded-md outline-none focus:border focus:border-lightGray'
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image
                      src='/menu_close.svg'
                      width={30}
                      height={30}
                      alt='menu-close'
                    />
                  ) : (
                    <Image
                      src='/menu_open.svg'
                      width={30}
                      height={30}
                      alt='menu-open'
                      className='focus:border-none active:border-none'
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0  ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              } `}
            >
              <ul className='h-screen md:h-auto items-center justify-center md:flex'>
                <li
                  className={`${
                    selectedButton === 1 ? styles.box : ''
                  } text-xl text-white text-center md:px-6 md:mx-4 my-6 `}
                >
                  {/* <Link href='' onClick={handleClick}> */}
                  <button onClick={() => handleClick(1)}>
                    <div
                      className={`${
                        selectedButton === 1 ? styles.gradient_text : ''
                      } font-bold `}
                    >
                      Home
                    </div>
                  </button>
                  {/* </Link> */}
                </li>
                <li
                  className={`${
                    selectedButton === 2 ? styles.box : ''
                  } text-xl text-white md:px-6 text-center`}
                >
                  {/* <Link href='' onClick={() => handleClick(2)}> */}
                  <button onClick={() => handleClick(2)}>
                    <div
                      className={`${
                        selectedButton === 2 ? styles.gradient_text : ''
                      }  font-bold `}
                    >
                      Products
                    </div>
                  </button>
                  {/* </Link> */}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
