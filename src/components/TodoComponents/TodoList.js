// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

const TodoList = props => {
    return (
        props.todos.map(todo => (
            <h2>{todo.task}</h2>)

        )
    )
}

export default TodoList