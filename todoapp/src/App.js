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
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(id){

        this.setState(prevState =>{
          const updateTodos = prevState.todos.map(todo =>{
              if(todo.id === id){
                  todo.completed = !todo.completed;
              }
              return todo;
          });
          return {
              todos: updateTodos
          }
        });
    }
    render(){
        const todosData = this.state.todos.map(item => <TodoItem key={item.id} todoitem={item}
        handleChange={this.handleChange}
       />);

        return (
            <div className="todo-list">
                {todosData}
            </div>
        )
    }
}
export default App;