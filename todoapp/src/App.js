import React from 'react';
import TodoItem from './components/TodoItem';
import todoData from './todoData';
import './css/style.css';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            todos: todoData //this is an array of data from tododata.js
        }
    }

    render(){
        const todosData = this.state.todos.map(item => <TodoItem key={item.id} todoitem={item}/>);

        return (
            <div className="todo-list">
                {todosData}
            </div>
        )
    }
}
export default App;