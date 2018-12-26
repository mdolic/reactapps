import React from 'react';

function Joke(props){
   // console.log(props)
    return (
        <div className="joke">
            <h1 style={{display: props.question ? "block" : "none"}}>Question: {props.question}</h1>
            <p style={{color: "red"}}>Punchline: {props.punchline}</p>
        </div>
    )
}

export default Joke;