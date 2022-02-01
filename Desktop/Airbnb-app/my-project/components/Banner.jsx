
import Image from 'next/image';

function Banner() {
  return(
     <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
       <Image 
        src = 'https://links.papareact.com/0fm'
        layout='fill'
        objectFit='cover'
       /> 
       <div className='absolute top-1/2 w-full text-center'>
           <p className='text-sm sm:text-lg'> Not Sure where to go</p>
           <button className='text-center text-purple-500 font-bold rounded-full py-4 my-4 w-2/12 focus:outline-none bg-grey-900 border-2 border-indigo-100 shadow-md active:scale-90 transition hover:shadow-xl duration-150'>Flexible</button>
       </div>
     </div>
  );
}

export default Banner;