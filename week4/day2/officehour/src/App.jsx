import TodoList from './components/todoList';
import TodoForm from './components/todoForm';
import './App.css';
import { useState } from 'react';

function App() {
  const [todoItems, setTodoItems] = useState([]);

  return (
    <div className="App">
     <TodoList todoItems={todoItems} setTodoItems={setTodoItems} />
     <TodoForm todoItems={todoItems} setTodoItems={setTodoItems} />
    </div>
  );
}

export default App;
