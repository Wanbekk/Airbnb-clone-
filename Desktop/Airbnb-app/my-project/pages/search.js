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
   
  const MainData = [ {"img":"https://links.papareact.com/xqj","location":"Private room in center of London","title":"Stay at this spacious Edwardian House","description":"1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine","star":4.73,"price":"£30 / night","total":"£117 total","long":-0.0022275,"lat":51.5421655},{"img":"https://links.papareact.com/hz2","location":"Private room in center of London","title":"Independant luxury studio apartment","description":"2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen","star":4.3,"price":"£40 / night","total":"£157 total","long":-0.095091,"lat":51.48695},{"img":"https://links.papareact.com/uz7","location":"Private room in center of London","title":"London Studio Apartments","description":"4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine","star":3.8,"price":"£35 / night","total":"£207 total","long":-0.135638,"lat":51.521916},{"img":"https://links.papareact.com/6as","location":"Private room in center of London","title":"30 mins to Oxford Street, Excel London","description":"1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine","star":4.1,"price":"£55 / night","total":"£320 total","long":-0.069961,"lat":51.472618},{"img":"https://links.papareact.com/xhc","location":"Private room in center of London","title":"Spacious Peaceful Modern Bedroom","description":"3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning","star":5.0,"price":"£60 / night","total":"£450 total","long":-0.08472,"lat":51.510794},{"img":"https://links.papareact.com/pro","location":"Private room in center of London","title":"The Blue Room In London","description":"2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine","star":4.23,"price":"£65 / night","total":"£480 total","long":-0.094116,"lat":51.51401},{"img":"https://links.papareact.com/8w2","location":"Private room in center of London","title":"5 Star Luxury Apartment","description":"3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine","star":3.85,"price":"£90 / night","total":"£650 total","long":-0.109889,"lat":51.521245}]

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
                
               {MainData.map(({img, location, title, description, star, price, total }) => (
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