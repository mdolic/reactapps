import React from 'react';


function TodoItem(props){

    const completedStyles = {
        fontStyle: 'italic',
        color:'#cdcdcd',
        textDecoration: 'line-through'
    }
    return(
        <div className="todo-item">
            <input
            type="checkbox"
            checked={props.todoitem.completed}
            onChange={()=> props.handleChange(props.todoitem.id)}
            />
             <p style={props.todoitem.completed ? completedStyles : null}>{props.todoitem.text}</p>
        </div>
    )
}

export default TodoItem;