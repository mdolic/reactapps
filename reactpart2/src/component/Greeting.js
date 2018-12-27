import React from 'react';


class Greeting extends React.Component{
    render(){
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
            <div>
                <h1> it is currently {timezone}</h1>
            </div>
        )
    }
}
export default Greeting;