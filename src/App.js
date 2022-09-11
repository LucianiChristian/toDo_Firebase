import { Button } from '@mui/material';
import React from 'react';

import './App.css';

function App() {
  const [todos, setTodos] = React.useState(["Take dogs for a walk", "Take 😙", "Zzzzt"]);
  const [input, setInput] = React.useState("");

  function handleInput(event) {
    const userInput = event.target.value;
    
    setInput(userInput);
  }

  function addToDo(event) {
    event.preventDefault();

    setTodos(currentToDos => [...currentToDos, input]);

    setInput("");
  }

  const todoElements = todos.map(todo => (
    <li>{todo}</li>
  ))

  return (
    <div>
      <h1>To-Do? 🌗</h1>
      <input type="text" value={input} onChange={handleInput}/>
      <Button variant="contained" color="primary" onClick={addToDo} disabled={!input}>Add To-Do</Button>
      <ul>
        {todoElements}
      </ul>
    </div>
  );
}

export default App;
