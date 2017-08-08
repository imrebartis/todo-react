//STATELESS FUNCTIONAL COMPONENT
import React from 'react';
import PropTypes from 'prop-types';
        
export const TodoForm = (props) => (
  <form onSubmit={props.handleSubmit}>
    <input type="text"
      onChange={props.handleInputChange}
      value={props.currentTodo}/>
  </form>)

// preventing the properties to be passed in a wrong datatype (currentTodo has to be a string, handleInputChange must be a function)
  TodoForm.propTypes = {
    currentTodo: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
  }