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
          name: 'mirzet',
          age:25
      }
  }
    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <h1>{this.state.age} years old</h1>
            </div>
        )

    }
}

export default App;