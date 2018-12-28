import React from 'react';

class App extends React.Component{

constructor(){
    super();
    this.state = {
        count: 0
    }
    this.clickMe = this.clickMe.bind(this)
}
    clickMe(){
          this.setState (prevState =>{
              return {
                  count: prevState.count + 1 //dont need this
              }
          })
    }
    render(){

        return(
            <div>
              <h1>{this.state.count}</h1>
              <button onClick={this.clickMe}>Change!</button>

            </div>
        )
    }
}

export default App;