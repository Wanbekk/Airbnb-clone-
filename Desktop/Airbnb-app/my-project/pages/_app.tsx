import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { Router } from 'next/router';
import  ProgressBar from '@badrap/bar-of-progress';

const Progress = new ProgressBar({
  size: 10,
  color: '#FE595E',
  className: 'z-50',
  delay: 100,
});

Router.events.on('routeChangeStart', Progress.start);
Router.events.on('routeChangeComplete', Progress.finish);
Router.events.on('routeChangeError', Progress.finish);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp




export async function getStaticProps() {
  /*
  const res = await fetch('https://links.papareact.com/pyp').then(
    exploreData => res.json()i
  );      props:{
      data
    } */
  const res = await fetch('https://links.papareact.com/pyp')
  const data = await res.json()

  return{
   data
  }
}
/*
const index = (props) => {
  return (
      <div>
          <h1>{props.data}</h1>
      </div>
  );
};

export default index;

export async function getStaticProps() {
  const res = await fetch('https://api.kanye.rest')
  const data = await res.json()

  return {
      props: {
          data,
      }
  }
}
*/