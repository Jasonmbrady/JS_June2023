import React, {useState} from 'react';

const TodoForm = ({todoItems, setTodoItems}) => {
    const [todo, setTodo] = useState("");
    const formHandler = event => {
       event.preventDefault();
       const newTodo = {
        id: Math.floor(Math.random() * 1000000),
        text: todo,
        completed: false
       }
       setTodoItems([...todoItems, newTodo]);
    }
    return(
        <form onSubmit={formHandler}>
            <div>
            <label htmlFor="item">To Do:</label>
            <input type="text" value={todo} name="item" id="item" onChange={e => setTodo(e.target.value)} />
        </div>
        <button>Add to List</button>
        </form>
    );
}
export default TodoForm;