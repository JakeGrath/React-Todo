import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      List: [
        {
          task: 'Render this list',
          id: String(Date.now()),
          completed: false
        },
        {
          task: 'Create list form and button',
          id: String(Date.now()),
          completed: false
        },
        {
          task : 'Give functionality to button',
          id: String(Date.now()),
          completed: false
        },
        {
          task: 'Add completion toggle',
          id: String(Date.now()),
          completed: false
        },
        {
          task: 'Remove trash',
          id: String(Date.now()),
          completed: false
        },
        {
          task: 'Add styling',
          id: String(Date.now()),
          completed: false
        }
      ],
      todo: ''
    }
  }

addTask = e => {
  e.preventDefault();
  console.log(this.state.todo)
  let newTask = {
    task: this.state.todo,
    id: String(Date.now()),
    completed: false
  }
  this.setState({
    List: [...this.state.List, newTask],
    todo: ''
  })
}

handleChange = e => {
  this.setState({
    [e.target.name] : [e.target.value]
  })
}

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.List} />
        <TodoForm 
        value={this.state.todo}
        submitForm={this.addTask}
        inputChange={this.handleChange}/>
      </div>
    );
  }
}


export default App;
