import React from 'react';

function Header(){
    const date = new Date();
    const hours = date.getHours();

    let timezone;
    if(hours < 12){
        timezone = 'morning';
    }else if(hours >=12 && hours < 17){
        timezone = 'afteroon';
    }else{
        timezone = 'day';
    }
    return(
      <h1 style={{color:"red"}}> it is currently {timezone}</h1>
    )

}

export default Header;