import React from 'react';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Header from './components/Header';
import ContactCard from './components/ContactCard';
import Joke from './components/Joke';
import jokesData from './jokesData';
import Product from './components/Product';
import vschoolProducts from './vschoolProducts';

function App(){
  const jokeComponents = jokesData.map(joke =>{
         return <Joke key={joke.id} question={joke.question}
         punchline={joke.punchline}/>
         });

// const jokeComponents = jokesData.map(item =>
//         <Joke key={item.id} joke={item}/>);

// trys this later const filterdJokes = jokesData.filter()
// const productComponents = vschoolProducts.map(product =>{
//     return <Product key={product.id}
//     name={product.name}
//     price={product.price}
//     description={product.description}/>
// });
const productComponents = vschoolProducts.map(item =>
        <Product key={item.id} product={item}/>);

    return(
        <div>
           <Header/>
           <MainContent/>
           <ContactCard
                contact={{name:"whiskers",imgUrl:"https://www.petmd.com/sites/default/files/petmd-kitten-development.jpg",phone:"515-666-6663",email:"whiskerscat@gmail.com"
                }}
            />
           <Footer/>
            {jokeComponents}

            <p>----------------------------------</p>
            {productComponents}
        </div>
    )
}

export default App;