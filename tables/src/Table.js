import React from 'react';

const TableBody = props =>{
    const rows = props.charactersData.map((row, index) =>{
        return(
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td><button onClick={() => props.removeCharacter(index)}>Delete</button></td>
            </tr>
        );
    });
    return <tbody>{rows}</tbody>
}


const TableHeader = () =>{
    return(
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
}
class Table extends React.Component{

    render(){
        const {charactersData, removeCharacter} = this.props;



        return(
            <table>
                <TableHeader />
                <TableBody
                charactersData = {charactersData}
                removeCharacter = {removeCharacter} />
                <br></br>
                <hr></hr>
            </table>
        );
    }
}
export default Table;