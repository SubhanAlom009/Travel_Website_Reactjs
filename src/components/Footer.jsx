import React from 'react'
import video1 from '../assets/videos/1.mp4'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaDigitalOcean } from "react-icons/fa6";
function Footer() {
  return (
    <div className='relative'>
      <video autoPlay loop muted className='object-cover w-full h-screen bg-cover' src={video1}></video>
      <div className='absolute inset-0 px-4 md2:px-24 top-[8rem] lg:top-[10rem]'>
        <div className='flex flex-col items-center justify-center mb-4 space-y-6 text-white md:space-x-8 md:space-y-0 md:flex-row'>
            <div className='flex flex-col items-center justify-center space-y-2 md:items-start'>
                <p className='text-xl'>Keep in touch</p>
                <h1 className='text-3xl font-bold'>Travel with us</h1>
            </div>
            <input placeholder='Enter your email' className='h-12 px-4 bg-transparent border-2 focus:outline-none rounded-3xl' type="email" />
            <button className='px-4 py-2 text-white bg-gradient-to-r from-blue-300 to-blue-500 rounded-3xl'>Send</button>
        </div>
        <div className='bg-[#F4F3F3] flex-col space-y-8 md:flex-row rounded-t-xl bg-opacity-80 flex justify-between items-center p-4'>
            <div className='flex flex-col items-center justify-center space-y-8 md:w-1/2 md:items-start'>
                <div className='flex items-center space-x-2'>
                <FaDigitalOcean className='text-xl text-blue-600 md:text-3xl lg:text-4xl'/>
                <p className='text-3xl font-bold'>Travel</p>
                </div>
                <p className='text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates repellat magnam eaque, ab fugiat consequuntur, aut rem iste ex nisi, velit consequatur? Atque provident temporibus doloribus laudantium repellendus inventore cupiditate.</p>
                <div className='flex space-x-4 text-2xl'>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaXTwitter /></a>
                    <a href="#"><FaYoutube /></a>
                </div>
            </div>
            <div className='flex justify-between space-x-8 md:w-1/2'>
                <div className='flex flex-col'>
                    <h1 className='mb-4 text-xl font-medium'>Our Agency</h1>
                    <ul className='space-y-2'>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Mobile</a></li>
                    </ul>
                </div>
                <div>
                    <h1 className='mb-4 text-xl font-medium'>Our Agency</h1>
                    <ul className='space-y-2'>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Mobile</a></li>
                    </ul>
                </div>
                <div>
                    <h1 className='mb-4 text-xl font-medium'>Our Agency</h1>
                    <ul className='space-y-2'>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Mobile</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='bg-gradient-to-r rounded-b-xl from-blue-300 to-blue-500'>
            <p className='py-4 text-center text-white'>Copyright © 2022 Travel. All rights reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
