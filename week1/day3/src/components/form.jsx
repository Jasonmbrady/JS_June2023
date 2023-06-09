import React from "react";

const Form = (props) => {
    const {setMessage} = props;

    const clickHandler = (event) => {
        console.log(event)
        event.preventDefault();
        const newMessage = document.getElementById("msg").value 
        setMessage(newMessage);
    }
    return (
        <div>
            <input type="text" id="msg"/>
            <button onClick={clickHandler}>Click Me!</button>
        </div>
    )
}

export default Form;