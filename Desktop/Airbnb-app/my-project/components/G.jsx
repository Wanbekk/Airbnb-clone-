import Banner from "./Banner";

  export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return {
    props: {
      ninjas: data
    }
  }
  }


  const Ninjas = ({ninjas}) => {
<div>
  <h1></h1>
  {ninjas.map(ninja =>{
    <div key={ninja.id}>
      <a>
        <h3>{ninja.name}</h3>
      </a>
    </div>
  })}
</div>
  }

  export default Ninjas
/*
   export const getStaticProps = async () => {
     const res = await fetch('http://jsonplaceholder.typicode.com/posts');
     const data = await res.json();

     return{
       props: {
         ninjas: data
       }
     }
   }

const Ninjas = ({ninjas}) => {
  <div>
    <h1>hello world</h1>
    {ninjas.map(ninja => {
      return(
        <div>
      {  <div key={ninja.id}>
              <a>
                <h4>{ninja.name}</h4>
              </a>
        </div>}
        <Banner/>
        </div>
    )
    })}
  </div>
}

*/