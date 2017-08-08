//STATELESS FUNCTIONAL COMPONENT
import React from 'react';
import PropTypes from 'prop-types';
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

// preventing the properties to be passed in a wrong datatype (todos must be an array)
TodoList.propTypes = {
  todos: PropTypes.array.isRequired
}