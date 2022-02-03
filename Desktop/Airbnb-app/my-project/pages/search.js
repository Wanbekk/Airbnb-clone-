import Header from '../components/Header';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import format from 'date-fns/format';
import axios from 'axios';
import {useEffect, useState} from 'react';
import InfoCard from '../components/InfoCard';

function search(searchResults) {  
    const router =  useRouter();
    console.log(searchResults);
    //es6 destrucioning
    const {location, startDate, endDate, noOfGuest} = router.query;  
    const formatedStartDate =  format(new Date(startDate),'dd MMMM yy');
    const formattedEndDate =  format(new Date(endDate),'dd MMMM yy');
    const range = `${formatedStartDate} - ${formattedEndDate}`;
    console.log(router.query);

    const [searchDatas, setSearchDatas] = useState([]);
    const [post, setPost] = useState([]);
    useEffect(() => {
          axios.get('https://links.papareact.com/isz').then(res => {console.log(res)
             setSearchDatas(res.data)})
               .catch(err => {
                   console.log(err);
               },[])
    })

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {console.log(res)
           setPost(res.data)})
             .catch(err => {
                 console.log(err);
             },[])
  })
   
  return( 
  <div>
     {/** <div>
      <ul>{
          post.map(pos =>  (
           <div>
            
               <li key={pos.id}>{pos.title}</li>
           </div>
          
          ))} </ul>
  </div>
          );      */}

      <Header placeholder={`${location} | ${range} | ${noOfGuest} guests`}/>
      <main className="flex">
          <section className='flex-grow pt-14 px-6b '>
              <p className='text-xs'>300+  Stays - {range} -  for {noOfGuest} number of Guests</p>
              <h1 className='text-3xl'> Stays In {location} </h1>
              <div className='hidden lg:inline-flex mb-5 space-x-2 whitespace-nowrap text-gray-800'>
                  <p className='button'> Cancellation Flexibility</p>
                  <p className='button'> Cancellation Flexibility</p>
                  <p className='button'> Cancellation Flexibility</p>
                  <p className='button'> Cancellation Flexibility</p>
                  <p className='button'> Cancellation Flexibility</p>
              </div>
              <div className='flex flex-col'>
              
              {console.log(searchDatas)}
                
               {searchDatas.map(({img, location, title, description, star, price, total }) => (
                      <InfoCard
                      key={img} 
                      img={img}
                      location={location}
                      title={title}
                      description={description}
                      star={star}
                      price={price}
                      total={total}
                      /> 
              ))}
              {searchDatas.map(searchData => (
                  <div>
                        <h1>{searchData.price}</h1>
                  </div>
                    
              ))}
            
             

              </div>
             
          </section>
      </main>
      <Footer/>
  </div>
  );
}

export default search;
/*
export async function getServerSideProps(){
    const searchResults = await fetch('https://links.papareact.com/isz').then((res) => res.json());
    return {
        props: {
           searchResults,            
        }
    }
}


{searchDatas.map(({img, location, title, description, star, price, total }) => (
                      <InfoCard 
                      img={img}
                      location={location}
                      title={title}
                      description={description}
                      star={star}
                      price={price}
                      total={total}
                      /> 
              ))}


*/