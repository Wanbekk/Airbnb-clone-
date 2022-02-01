import React from 'react';
import UnitCard from './UnitCard';
import MediaCard from './MediaCard';
import LargeCard from './LargeCard';
import Footer from './Footer';

const MediumCards = [
  {
    id: 1,
      img: 'https://media.cntraveler.com/photos/5e84ab942b413c00094f2cfc/master/w_2250,h_1500,c_limit/airbnb-design-272282.jpg',
      title: 'This is a beautiul house made with graphite'
  },
  {
    id: 1,
      img: 'https://media.cntraveler.com/photos/5e84ab942b413c00094f2cfc/master/w_2250,h_1500,c_limit/airbnb-design-272282.jpg',
      title: 'This is a beautiul house made with graphite'
  },
  {
    id: 2,
      img: 'https://media.cntraveler.com/photos/5e84ab942b413c00094f2cfc/master/w_2250,h_1500,c_limit/airbnb-design-272282.jpg',
      title: 'This is a beautiul house made with graphite'
  },
  {
    id: 3,
      img: 'https://media.cntraveler.com/photos/5e84ab942b413c00094f2cfc/master/w_2250,h_1500,c_limit/airbnb-design-272282.jpg',
      title: 'This is a beautiul house made with graphite'
  },
  {
    id: 4,
      img: 'https://media.cntraveler.com/photos/5e84ab942b413c00094f2cfc/master/w_2250,h_1500,c_limit/airbnb-design-272282.jpg',
      title: 'This is a beautiul house made with graphite'
  }
]
  

function SmallCard() {

  
  const cards = [
   
    {
      id: 1,
      img: 'https://media.cntraveler.com/photos/5e84ab942b413c00094f2cfc/master/w_2250,h_1500,c_limit/airbnb-design-272282.jpg',
      distance: 'aba',
      location: '22km'
    },
    {
      id: 2,
      img: 'https://media.cntraveler.com/photos/5e84ab942b413c00094f2cfc/master/w_2250,h_1500,c_limit/airbnb-design-272282.jpg',
      location:  '330km',
      distance: 'aba'
    },
    {
      id: 3,
      img: 'https://media.cntraveler.com/photos/5e84ab942b413c00094f2cfc/master/w_2250,h_1500,c_limit/airbnb-design-272282.jpg',
      location: '450km',
      distance: 'edo'
    },
    {
      id: 4,
      img: 'https://media.cntraveler.com/photos/5e84ab942b413c00094f2cfc/master/w_2250,h_1500,c_limit/airbnb-design-272282.jpg',
      location: '500km',
      distance: 'anambra'
    },
    {
      id: 1,
      img: 'https://media.cntraveler.com/photos/5e84ab942b413c00094f2cfc/master/w_2250,h_1500,c_limit/airbnb-design-272282.jpg',
      distance: 'aba',
      location: '22km'
    },
    {
      id: 2,
      img: 'https://media.cntraveler.com/photos/5e84ab942b413c00094f2cfc/master/w_2250,h_1500,c_limit/airbnb-design-272282.jpg',
      location:  '330km',
      distance: 'aba'
    },
    {
      id: 3,
      img: 'https://media.cntraveler.com/photos/5e84ab942b413c00094f2cfc/master/w_2250,h_1500,c_limit/airbnb-design-272282.jpg',
      location: '450km',
      distance: 'edo'
    },
    {
      id: 4,
      img: 'https://media.cntraveler.com/photos/5e84ab942b413c00094f2cfc/master/w_2250,h_1500,c_limit/airbnb-design-272282.jpg',
      location: '500km',
      distance: 'anambra'
    }
]


  return(
    <div >  
    <main className='max-w-7xl mx-auto px-8 sm:px-16'>
    <section className='pt-5'>
      <h2 className='text-4xl font-semibold pb-5'>Explore NearBy </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    {cards.map(card => (
                      <UnitCard 
                      id={card.id}
                      location={card.location}
                      distance={card.distance}
                      img={card.img}
                      />
                    ))}
                    </div>
            </section>
            <section>
        <h2 className='text-4xl font-semibold py-8 px-5'>Live Anywhere</h2>
        <div className='flex space-x-3 overflow-x-scroll scrollbar-hide p-3 -ml-3'>
        {MediumCards.map(({img,title,id}) => (
          <MediaCard
          id={id}
          img={img}
          title={title}
          />
        ))}
        </div>
           </section>
           <LargeCard
      img='https://links.papareact.com/4cj'
      description='The Greatest Outdoors'
      title='Wishlists created by Airbnb'
      buttonText='Get Inspired'
      />
          </main>
          <Footer />
        </div>
  );
}

export default SmallCard;


/*
export async function getStaticProps() {
  const cardData = await fetch('https://links.papareact.com/zp1').then((res) => res.json())
 
  return{
    props:{
      cardData
    }
  }
}

*/