import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import SmallCard from '../components/SmallCard';
//import Ninjas from '../components/G';
import LargeCard from  '../components/LargeCard';


export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <Header/>
      <Banner/>
      <SmallCard/>
     

      {/*
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-5'>
          <h2 className='text-4xl font-semibold pb-5'>Explore NearBy </h2>
          {/**pull data from server */}
          {/*{exploreData?.map((item) => {
               <SmallCard 
               location={item.location}
               image={item.image}
               distance={item.distance}
                />
              
          })}
        
        </section>
      </main>
      */}
    </div>
  );
}



  
/*
export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(
    (res) => res.json()
  );

  return{
    props:{
      exploreData
    }
  }
}
*/
