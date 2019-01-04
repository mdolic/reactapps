import React, {Component} from 'react';

class App extends Component{
    constructor(){
        super();
        this.state ={
            unreadMessages: [
                "call someone",
                "another message"
            ]
        }
    }
    render(){
        return(
            <div>
                <h2>You have this {this.unreadMessages} unread Messages</h2>
            </div>
        )
    }
}
export default App;