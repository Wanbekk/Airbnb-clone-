//import React from 'react';
import Image from 'next/image';
import {
    SearchIcon,
    GlobeAltIcon,
    UserCircleIcon,
    MenuIcon,
    UsersIcon,
    UserIcon
 } from '@heroicons/react/solid';
 import { useState } from 'react';
 import 'react-date-range/dist/styles.css'; // main style file
 import 'react-date-range/dist/theme/default.css'; // theme css file
 import { DateRangePicker } from 'react-date-range';
 import { useRouter } from 'next/router';

//import Router from "next/router";

function Header({placeholder}) {
    const [searchInput, setSearchInput] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [noOfGuest, setNoOfGuest] = useState(1);
    const router = useRouter();
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    const resetInput = () => {
        setSearchInput('')
    }

    const search = () => {
        router.push({
            pathname: '/search',
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGuest
            }
        });
    }
  return( 
  <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 '>
          {/*left */}
          <div 
          onClick={() => router.push('/')}
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
              <input
              value={searchInput} 
              onChange={(e) => setSearchInput(e.target.value)}
              className='pl-5 flex-grow bg-transparent outline-none text-gray-600 placeholder-grey-400' type='text' placeholder= {placeholder || 'start your search' }/>
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
          {searchInput &&  (
              <div className='flex flex-col col-span-3 mx-auto mt-10 border-r-8 border-l-8'>
                
                  <DateRangePicker 
                  ranges={[selectionRange]}
                  minDate={new Date()}
                  rangeColors={['#FD5B61']}
                  onChange={handleSelect}
                  />
                 <div className='flex items-center border-b-8 '>
                     <h2 className='text-2xl flex-grow font-semibold ml-5 '>Number of Guests</h2>
                     <UserIcon className='h-5'/>
                     <input type="number" name=" "
                      id=""
                      className='w-12 pl-2  text-lg outline-none text-red-400 '
                      value={noOfGuest}
                      min={1}
                      onChange={(e) => setNoOfGuest(e.target.value)} 
                     />
                 </div>
                 <div className='flex border-b-8'>
                     <button onClick={resetInput} className='flex-grow text-gray-500'>Cancle</button>
                     <button className='flex-grow text-red-400 border-l-8'
                     onClick={search}> Search </button>
                 </div>
              </div>
          ) 
          }
  </header>

);
}

export default Header;