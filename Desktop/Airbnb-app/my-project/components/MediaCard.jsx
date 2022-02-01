import React from 'react';

function MediaCard({img, title}) {
  return (
    <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out '>
      <div className='relative w-80 h-80'>
      <img 
      src={img} 
      alt="" 
      className=' rounded-xl'
      />
      </div>
      <h3 className='text-2xl -mt-10'>{title}</h3>

    </div>
  );
}

export default MediaCard;
