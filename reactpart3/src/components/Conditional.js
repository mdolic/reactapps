import React from 'react';


function Conditional(props) {
    console.log(props.isLoading)
    if(props.isLoading === true) {
        return (
            <h1>isLoading ...</h1>
        )
    }else{
        return (
            <h1> some cool stuff on conditionla rendering</h1>
        )
    }

}

export default Conditional;