import React from 'react';
import TodoItem from './components/TodoItem';
import todoData from './todoData';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            todos: todoData // todoData loaded here
        }
    }

    render(){
        const todoComponents = this.state.todos.map(item =>
            <TodoItem key={item.id} todoitem={item}/>);
    return(
        <div className="todo-list">
           {todoComponents}
        </div>
    )
}
}

export default App;