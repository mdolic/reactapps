import React, {Component} from 'react';


/*
    1. add state to this app
    2. have state keep track of whether the user is logged in or not
    3. add a button that llogs the user in/out
        3.1 make button display "log in" if they are not logged in and
        log out if they are
    4. display text that says loggged in if the user is logged in, or logged out
    if they are not
*/
class App extends Component{
    constructor(){
        super();
        this.state ={
           isLoggedIn: true //flip to false
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(id){

        this.setState(prevState =>{
            return{
                isLoggedIn: !prevState.isLoggedIn
            }
        });
}
    render(){
        let buttonTxt  = this.state.isLoggedIn ? "log out" : "log in";
        let displayTxt = this.state.isLoggedIn ? "Logged In": "Logged out";
        return(
            <div>
                <button onClick={this.handleClick}>{buttonTxt}</button>
                <h1>{displayTxt}</h1>
            </div>
        )
    }
}
export default App;