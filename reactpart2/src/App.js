import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/Header';
import Greeting from './component/Greeting';

/*
    function App(props){
        return(
            <div>
                <h1>{props.whatever}</h1>
            </div>
        )
    }
*/
class App extends React.Component{

  constructor(){
      super();
      this.state={
          isLoggedIn: true
      }
  }
    render(){
      let displayLoggedIn;
            if(this.state.isLoggedIn === true){
                displayLoggedIn = 'In';
            }else{
            displayLoggedIn = 'Out';
            }

        return(
            <div>
               { /*<h1> Your are currently logged {this.state.isLoggedIn ? 'In' : 'Out'}</h1>*/}
               <h1> Your are currently logged {displayLoggedIn}</h1>
            </div>
        )



    }
}

export default App;