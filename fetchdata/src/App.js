import React, {Component} from 'react';


class App extends Component{

  constructor(){
    super();
    this.state = {
      isLoading: false,
        character: {

        }

    }
  }
  componentDidMount(){
    this.setState({isLoading:true})
    fetch('https://swapi.co/api/people/1')
    .then(response =>response.json())
    .then(data => {
        this.setState({
            character: data
        });
    });
  }
  render(){
    return(
      <div>
          {this.state.character.name}
      </div>
    )
  }
}

export default App;