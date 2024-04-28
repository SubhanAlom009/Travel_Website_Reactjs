import React from 'react';
import pic1 from '../assets/pexels-blitzboy-1144176.jpg';
import { card_details } from '../constant';

function Content() {
  return (
    <div className='px-8 mt-24 mb-12'>
        <h1 className='text-3xl font-semibold'>Most Visited <span className='text-transparent underline decoration-blue-400 underline-offset-4 bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text'>Destinations</span></h1>
        <div className='flex flex-row flex-wrap mt-12'>
            {
                card_details.map((card,index)=>(
                    <div key={index} className='flex py-8 item-center flex-wrap md:w-[45%] lg:w-[30%] mx-4 mt-6 shadow-lg rounded-xl'>
                        <img src={pic1} className='rounded-t-xl'/>
                        <div className='p-4 mt-6'>
                            <div>
                                <h1 className='text-xl font-bold'>{card.city}</h1>
                                <p className='text-neutral-500'>{card.country}</p>
                            </div>
                            <hr className='my-4' />
                            <div className='flex justify-between px-2'>
                                <p className='w-20 text-neutral-500'>Cultural Relax <span className='px-2 rounded-xl bg-gradient-to-r from-blue-300 to-blue-500'>+1</span></p>
                                <p className='text-xl font-extrabold'>{card.price}</p>
                            </div>
                            <hr className='my-4'/>
                            <div className='text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis perspiciatis nihil, est iure natus error nam adipisci quia laboriosam illo quaerat porro? Delectus facere nemo quasi aspernatur recusandae expedita officia!</div>
                            <button className='flex justify-center px-8 py-2 mt-6 text-sm font-medium text-white w-28 bg-gradient-to-r from-blue-300 to-blue-500 rounded-2xl'>Details</button>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  );
}

export default Content;
