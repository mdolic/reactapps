import React from 'react';
import TodoItem from './components/TodoItem';
import todoData from './todoData';

function App(){
    const todoComponents = todoData.map(item =>
    <TodoItem key={item.id} todoitem={item}/>);
    return(
        <div className="todo-list">
           {todoComponents}
        </div>
    )
}

export default App;