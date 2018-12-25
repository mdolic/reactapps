import React from 'react';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Header from './components/Header';
import ContactCard from './components/ContactCard';


function App(){
    return(
        <div>
           <Header/>
           <MainContent/>
           <ContactCard
                contact={{name:"whiskers",imgUrl:"https://www.petmd.com/sites/default/files/petmd-kitten-development.jpg",phone:"515-666-6663",email:"whiskerscat@gmail.com"
                }}
            />

           <Footer/>

        </div>
    )
}

export default App;