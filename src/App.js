import { Button, FormControl, Input, InputLabel } from '@mui/material';
import React from 'react';
import ToDo from './ToDo';
import db from './firebase.js';

import './App.css';

function App() {
  const [todos, setTodos] = React.useState([]);
  const [input, setInput] = React.useState("");

  React.useEffect(() => {
    db.collection('todos').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    });
  }, []); 

  function handleInput(event) {
    const userInput = event.target.value;
    
    setInput(userInput);
  }

  function addToDo(event) {
    event.preventDefault();

    db.collection('todos').add({
      todo: input,
    });

    setTodos(currentToDos => [...currentToDos, input]);

    setInput("");
  }

  const todoElements = todos.map(todo => (
    <ToDo text={todo}/>
  ))

  return (
    <div>
      <h1>To-Do? 🌗</h1>
      <FormControl>
        <InputLabel htmlFor="toDo">Write A To-Do</InputLabel>
        <Input id="toDo" value={input} onChange={handleInput}/>
      </FormControl>
      <Button variant="contained" color="primary" onClick={addToDo} disabled={!input}>Add To-Do</Button>
      <ul>
        {todoElements}
      </ul>
    </div>
  );
}

export default App;
