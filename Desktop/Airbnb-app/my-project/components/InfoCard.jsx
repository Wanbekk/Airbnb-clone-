import React from 'react';
import Image from 'next/image'; 
import { HeartIcon } from '@heroicons/react/solid';
import { StarIcon } from '@heroicons/react/solid';

function InfoCard({img, location, description, star, price, total, title}) {
  return (
  <div  className='flex py-2 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg pr-4 transition duration-150 ease-out first:border-t-4 '>
      
    <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0'>
        <Image 
         src={img}
         layout='fill'
         objectFit='cover'
         className='rounded-2xl'
         />
    </div>
    <div className='flex flex-col flex-grow pl-5'>
      <div className='flex justify-between'>
        <p>
          {location}
        </p>

        <HeartIcon className='h-2 cursor-pointer'/>
      </div>
      <h2 className="text-xl">{title}</h2>
      <div className="border-b w-10 pt-2">
        <p className='pt-2 text-sm text-gray-500 flex-grow'>{description}</p>
      </div>
      <div className='flex items-end justify-between pt-5'>
        <p className='flex items-center '><StarIcon className='h-5 text-red-500'/>{star}</p>
      </div>
      <div>
        <p className='text-lg lg:text-2xl font-semibold pb-2'>{price}</p>
        <p className='text-right font-extralight'>{total}</p>
      </div>
    </div>
  </div>
  );
}

export default InfoCard;
