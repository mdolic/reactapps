import React from 'react';


class Table extends React.Component{

    render(){
        const {charactersData} = this.props;
            const TableBody = () =>{
                return <tbody></tbody>;
            }

            const TableHeader = () =>{
                return(
                    <thead>
                        <th>Name</th>
                        <th>Job</th>
                    </thead>
                );
            }

        return(
            <div>
                <TableHeader />
                <TableBody charactersData = {charactersData}/>

            </div>
        )
    }
}
export default Table;