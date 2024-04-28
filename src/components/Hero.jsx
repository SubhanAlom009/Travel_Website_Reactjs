import React, { useState } from 'react'
import video3 from '../assets/videos/3.mp4'
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";


function Hero() {

    const [value,setValue] = useState(0)
  return (
    <div className='relative flex justify-center'>
      <video className='object-cover w-full h-screen bg-cover ' muted loop autoPlay src={video3}></video>
      <div className='absolute inset-0 px-4 md2:px-24 text-white top-[8rem] lg:top-[10rem]'>
          <p className='text-xl lg:text-2xl'>Our Packages</p>
          <h1 className='text-4xl font-bold lg:text-6xl'>Search Your <span className='underline underline-offset-8 decoration-blue-400 '>Holiday</span></h1>
          <div className='flex md2:flex-row space-y-6 md2:space-y-0 h-auto py-12 flex-col  md2:items-center justify-between bg-opacity-80 text-black md2:space-x-4 bg-[#F4F3F3] p-4 rounded-t-2xl mt-8'>
            <div className='lg:w-1/3'>
                <h1 className='px-2 text-md lg:text-lg text-slate-600'>Search Your Destination:</h1>
                <div className='relative'>
                    <input className='w-full h-12 px-4 pr-10 bg-white focus:outline-none rounded-3xl' type="text" />
                    <div className='absolute text-xl top-3 right-4'>
                        <FaLocationDot />
                    </div>
                </div>
            </div>
            <div className='lg:w-1/3'>
                <h1 className='px-2 text-md lg:text-lg text-slate-600'>Select a Date:</h1>
                <div>
                    <input className='w-full h-12 px-4 bg-white focus:outline-none rounded-3xl' type="date" min={new Date().toISOString().split("T")[0]} />
                </div>
            </div>
            <div className='lg:w-1/3'>
                <div className='flex justify-between px-2'>
                    <h1 className='text-md lg:text-lg text-slate-600'>Max Prcie:</h1>
                    <p className='text-lg font-semibold text-slate-600' value={value}>${value}</p>
                </div>
                <div className='w-full h-12 px-4 pt-2 bg-white focus:outline-none rounded-3xl'>
                    <input className='w-full h-2 px-4 border appearance-none border-slate-400 rounded-3xl' value={value} onChange={(e) => setValue(e.target.value)} min={1} max={5000} type="range" />
                </div>
            </div>
          </div>
          <div>
              <button className='w-full h-12 px-4 font-semibold text-white bg-gradient-to-r from-blue-300 hover:from-blue-500 to-blue-500 rounded-b-2xl'>Search</button>
          </div>
          <div className='flex justify-center mt-4 space-x-4 '> 
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaXTwitter /></a>
          <a href="#"><FaYoutube /></a>
          </div>
      </div>
    </div>
  )
}

export default Hero
