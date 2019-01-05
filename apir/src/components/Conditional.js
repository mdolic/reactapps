import React from 'react';


function Conditional(props) {
    console.log(props.isLoggedIn)
    if(props.isLoggedIn === true) {
        return (
            <h1>User is Logged In ...</h1>
        )
    }else{
        return (
            <h1> User can log out ... </h1>
        )
    }

}

export default Conditional;