//this is class based component
import React from 'react';

class Header extends React.Component{
    render(){
        return(
            <div>
                <h1>welcome, {this.props.username}</h1>
            </div>
        )
    }
}

export default Header;