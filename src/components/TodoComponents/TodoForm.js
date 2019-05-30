import React from 'react';
const TodoForm = props => {
  return (
    <form>
      <input
        onChange={props.inputChange}
        type="text"
        name="todo"
        value={props.value}
        placeholder="Task..."
      />
      <button onClick={props.submitForm}>Add task</button>
    </form>
  );
};

export default TodoForm;