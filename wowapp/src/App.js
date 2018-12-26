import React from 'react';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Header from './components/Header';
import ContactCard from './components/ContactCard';
import Joke from './components/Joke';
import jokesData from './jokesData';

function App(){
  const jokeComponents = jokesData.map(joke =>{
         return <Joke key={joke.id} question={joke.question} punchline={joke.punchline}/>
         });

// trys this later const filterdJokes = jokesData.filter()



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



        </div>
    )
}

export default App;