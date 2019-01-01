import React from 'react';
import Table from './Table';

class App extends React.Component{

    render(){
        const characters = [
            {
                name: 'lin',
                job:'designer'
            },
            {
                name:'ryan',
                job:'ux designer'
            },
            {
                name:'fran',
                job:'front end developer'
            },
            {
                name:'joe',
                job:'fullstack'
            }

        ];

        return(
            <div className="container">
                <Table charactersData = {characters} />

            </div>
        )
    }
}

export default App;