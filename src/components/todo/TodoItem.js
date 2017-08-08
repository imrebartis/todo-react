import React from 'react';
import PropTypes from 'prop-types';

export const TodoItem = (props) => {
  return (
    <li>
      <input type="checkbox" defaultChecked={props.isComplete}/> {props.name}
    </li>
  )
}

// preventing the properties to be passed in a wrong datatype (name must be a string, isComplete a boolean, etc.)
TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  isComplete: PropTypes.bool,
  id: PropTypes.number.isRequired
}