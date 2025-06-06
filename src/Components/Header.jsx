import React from 'react';
import logo from './../assets/images/logo.png';
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv, HiPlus } from "react-icons/hi2";
import HeaderItem from './HeaderItem'; // ✅ Importing the component

const Header = () => {
  const menu = [
    { name: 'HOME', icon: HiHome },
    { name: 'SEARCH', icon: HiMagnifyingGlass },
    { name: 'Watch-List', icon: HiPlus },
    { name: 'ORIGINALS', icon: HiStar },
    { name: 'Movies', icon: HiPlayCircle },
    { name: 'Series', icon: HiTv }
  ];

  return (
    <div className=' bg-black flex justify-between p-5 '>
        <div className='flex items-center gap-8'>
      <img src={logo} alt="Disney Logo" className='w-[80px] md:w-[115px] object-cover mr-6' />
      
        {menu.map((item) => (
          <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
        ))}
      </div>
      <img src="https://cdn.pixabay.com/photo/2020/06/30/10/23/icon-5355896_1280.png" alt="" className='w-[40px] rounded-full' />
    </div>
  )
}

export default Header;
