import { useState } from 'react';
import React from 'react'
import ReactDOM from 'react-dom'
import { FaDigitalOcean } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";



function Navbar() {

  
  const [toggle, setToggle] = useState(false)

  const handleToggleMenu = ()=>{
    setToggle(!toggle)
  }

  return (
    <div className='flex items-center justify-between h-20 px-6 lg:px-24 bg-slate-100'>
      <div className='flex items-center space-x-2'>
        <FaDigitalOcean className='text-xl text-blue-600 md:text-3xl lg:text-4xl'/>
        <h1 className='text-xl font-bold md:text-3xl lg:text-4xl'>Travel</h1>
      </div>
      <ul className='items-center hidden space-x-6 text-sm md2:flex lg:text-lg'>
        <li><a href="#">Home</a></li>
        <li><a href="#">Packages</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Pages</a></li>
        <li><a href="#">News</a></li>
        <li><a href="#">Contact</a></li>
        <li className='px-6 max-w-[150px] flex justify-center py-2 text-sm lg:text-md font-medium text-white cursor-pointer bg-gradient-to-r from-blue-300 to-blue-500 rounded-2xl'><button>Book Now</button></li>
      </ul>
      <button onClick={handleToggleMenu} className='flex md2:hidden'>{toggle ? <RxCross2 className='flex text-2xl md2:hidden'/> : <GiHamburgerMenu className='flex text-2xl md2:hidden'/>}</button>
      <div className='absolute w-full'>
      {
        toggle && (
          <div className='absolute z-20 flex w-full right-6 top-12 md2:hidden'>
            <ul className='flex flex-col items-center space-y-2 text-md rounded-md bg-[#F4F3F3] w-full py-4 md2:hidden lg:text-lg'>
              <li><a href="#">Home</a></li>
              <li><a href="#">Packages</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Pages</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Contact</a></li>
              <li className='px-6 max-w-[150px] flex justify-center py-2 text-sm lg:text-md font-medium text-white cursor-pointer bg-gradient-to-r from-blue-300 to-blue-500  rounded-2xl'><button>Book Now</button></li>
            </ul>
          </div>
        )
      }
      </div>
    </div>
  )
}

export default Navbar
