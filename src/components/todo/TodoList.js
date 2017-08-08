//STATELESS FUNCTIONAL COMPONENT
import React from 'react';
import {TodoItem} from './TodoItem';

export const TodoList = (props) => {
    //the spread operator passes all the properties of todo (i.a. its name) to this component
  return (
    <div className="Todo-List">
      <ul>
        {props.todos.map(todo => <TodoItem key={todo.id} {...todo}/>)}
      </ul>
    </div>
  )
}