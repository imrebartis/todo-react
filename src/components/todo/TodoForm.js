//STATELESS FUNCTIONAL COMPONENT
import React from 'react'


// the code here below doesn't work now that we've moved the form from App.js to this file
//  PROPS TO THE RESCUE !!!! (+ see attributes of TodoForm in App.js)

// export const TodoForm = () => (
//   <form>
//     <input type="text"
//       onChange={this.handleInputChange}
//       value={this.state.currentTodo}/>
//   </form>)
        
export const TodoForm = (props) => (
  <form>
    <input type="text"
      onChange={props.handleInputChange}
      value={props.currentTodo}/>
  </form>)