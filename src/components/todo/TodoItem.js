import React from 'react';
import PropTypes from 'prop-types';
import {partial} from '../../lib/utils';

export const TodoItem = (props) => {
  const handleToggle = partial(props.handleToggle, props.id);
  // I'm passing an arrow function inline here because we need to pass some data that is not an event handler
  return (
    <li>
      <input type="checkbox" onChange={handleToggle}
       checked={props.isComplete}/> {props.name}
    </li>
  )
}

// preventing the properties to be passed in a wrong datatype (name must be a string, isComplete a boolean, etc.)
TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  isComplete: PropTypes.bool,
  id: PropTypes.number.isRequired
}