import React from 'react';
import Table from './Table';

class App extends React.Component{

    state={
        characters: [
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

        ]
    };

removeCharacter = index =>{
    const {characters} = this.state;

    this.setState({
        characters: characters.filter((character, i)=>{
            return i !== index;
        })
    });
}
    render(){

        const {characters} = this.state;
        return(
            <div className="container">
                <Table
                    charactersData = {characters}
                    removeCharacter = {this.removeCharacter}
                />

            </div>
        )
    }
}

export default App;