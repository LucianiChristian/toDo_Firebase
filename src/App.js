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
      <button type="button" onClick={addToDo}>Add To-Do 🇦🇫</button>

      <ul>
        {todoElements}
      </ul>
    </div>
  );
}

export default App;
