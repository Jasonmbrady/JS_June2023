import React from 'react';

const TodoList = ({todoItems, setTodoItems}) => {
    const classToggle = event => {
        const allListItems = [...todoItems];
        for (let item of allListItems){
            if (item.id == event.target.id){
                item.completed = !item.completed;
            }
        }
        setTodoItems(allListItems);
    }

    const checkCompleted = id => {
        const listItem = todoItems.filter(item => item.id === id)[0];
        if (listItem.completed){
            return "strikethrough";
        } else {
            return "";
        }
    }
// 5 == "5" true
// 5 === "5" false
    const deleteHandler = event => {
        const updatedList = todoItems.filter( item => item.id != event.target.name)
        setTodoItems(updatedList);
    }
    return(
        <div>
            {todoItems.map( item => {
                return (
                    <div key={item.id}>
                        <p className={checkCompleted(item.id)}>{item.text}</p>
                        <input type="checkbox" id={item.id} onChange={classToggle}/>
                        <button onClick={deleteHandler} name={item.id}>Delete</button>
                    </div>
                )
            })}
        </div>
    );
}
export default TodoList;