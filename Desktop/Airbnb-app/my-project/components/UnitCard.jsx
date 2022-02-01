import React from 'react';
import Image from 'next/image';

function UnitCard({id, location, img, distance}) {
  return(
        <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl hover:cursor-pointer hover:bg-blue-100 hover:scale-105 transition duration-100 ease-out'>
            {/*left */}
            <div className="relative h-16 w-16">
           
             <img src={img} className='rounded-lg'/>
            </div>
            {/*right*/}
              <div className='mb-5'>
              <h2>{location}</h2>
              <h3 className='text-grey-500'>{distance}</h3>
              </div>
            {/*left */}
        </div>
  );
}

export default UnitCard;
