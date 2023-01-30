import Image from 'next/image';
import React from 'react';
import useMediaQuery from '../custom_hooks/useMediaQuery';
import styles from "../styles/Home.module.css";

function Footer() {
  const isLarge = useMediaQuery('(min-width: 970px)');
  return (
    <div className="w-full bg-[#f6f9ff] font-fred border-b-1">
      <div className="px-5 lg:px-none flex justify-center text-[#000] text-sm py-8">
        <div className="md:space-y-1">
          <div className='flex md:justify-center space-x-1'>
          <span className='justify-center text-center'>
            © Copyright 2023
            <strong className="font-bold ">
            <span className="text-[#271282]"> Glorious Life </span> 
            <span className="text-[#e33901]">Church</span>
            </strong>
            . All Rights Reserved.
          </span>
          </div>
          <div className="flex justify-center pt-3 text-sm space-x-1">
              
            <p className='pt-2 pr-3'>The Church With Excellence</p>
            <span className={styles.logo}>
                <Image
                  src="/GLC-LOGO-R.png"
                  alt="GLC LOGO"
                  width={40}
                  height={35}
                />
              </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
