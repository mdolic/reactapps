import React, {Component} from 'react';


class App extends Component{

  constructor(){
    super();
    this.state = {
        isLoading: false,
        character: { },
        firstName:""

    }
   this.handleChange = this.handleChange.bind(this)
  }
  // componentDidMount(){
  //   this.setState({isLoading:true})
  //   fetch('api link goes here')
  //   .then(response =>response.json())
  //   .then(data => {
  //       this.setState({
  //           isLoading: false,
  //           character: data
  //       });
  //   });
  // }

  handleChange(event){
      this.setState({
        firstName: event.target.value
      });
  }
  render(){
    const text = this.state.isLoading ? "Loading..." : this.state.name;
    return(
      <div>
         <p>{text}</p>
        <br></br>
      <form>
        <input type="text" placeholder="First Name" onChange={this.handleChange}/>
        <h1>{this.state.firstName}</h1>
      </form>
      </div>
    )
  }
}

export default App;