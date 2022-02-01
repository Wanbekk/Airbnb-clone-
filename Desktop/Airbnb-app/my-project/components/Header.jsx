//import React from 'react';
import Image from 'next/image';
import {
    SearchIcon,
    GlobeAltIcon,
    UserCircleIcon,
    MenuIcon,
    UsersIcon
 } from '@heroicons/react/solid'

function Header() {
  return( 
  <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 '>
          {/*left */}
          <div 
          className='relative flex items-center h-10 cursor-pointer my-auto'
          >
              <Image 
               src='https://links.papareact.com/qd3'
               layout='fill'
               objectFit='contain'
               objectPosition='left'
        
                />
          </div>

          {/* middle */}
          <div className=' flex md:border-2 items-center rounded-full p-y shadow-sm md:shadow-sm' >
              <input className='pl-5 flex-grow bg-transparent outline-none text-gray-600 placeholder-grey-400' type='text' placeholder='start your search'/>
              <SearchIcon className=" hidden md:inline-flex h-8  bg-red-400 text-white-500 rounded-full p-2 cursor-pointer md:mx-2"/>
            
    </div>
          {/* right */}
          <div className='flex space-x-6 items-center justify-end text-grey-500'>
              <p className='hidden md:inline cursor-pointer'>Become a host </p>
              <GlobeAltIcon className='h-6 cursor-pointer'/>
              <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
                  <MenuIcon className='h-6'/>
                  <UserCircleIcon className='h-6'/>
              </div>
          </div>
  </header>

);
}

export default Header;