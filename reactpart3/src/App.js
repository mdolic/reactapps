import React from 'react';

class App extends React.Component{

constructor(){
    super();
    this.state = {
        count: 0,
        doubleCount: 0
    }
    this.clickMe = this.clickMe.bind(this)
    this.doubleClick = this.doubleClick.bind(this)
}
    clickMe(){
          this.setState (prevState =>{
              return {
                  count: prevState.count + 2,
                  //doubleCount: prevState.count * 2//dont need {this}
              }
          })
    };
    // doubleClick(){
    //     this.setState(prevState2 =>{
    //         return {
    //             doubleCount: prevState2.doubleCount + 2
    //         }
    //     })
    // }
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