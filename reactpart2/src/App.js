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
    render(){
        return (
            <div>
                <Header
                    username="mirzet"
                />
                <Greeting/>
            </div>
        )
    }
}

export default App;