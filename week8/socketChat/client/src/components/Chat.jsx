import React, {useState, useEffect} from 'react';
import io from "socket.io-client";

const Chat = ({username, chatLog, setChatLog, message, setMessage}) => {
    // const [chatLog, setChatLog] = useState([]);

    const [socket] = useState( ()=>io(':8000'));

    useEffect( ()=>{
        socket.on("updateChat", data => {
            // console.log(data);
            // console.log(chatLog);
            setChatLog([...chatLog, data])
        })
    }, [socket, chatLog, setChatLog])

    const chatHandler = e => {
        e.preventDefault();
        const newChat = {
            username: username,
            message: message
        }
        socket.emit("newChat", newChat);
        setMessage("");
    }

    return(
        <div>
            <form onSubmit={chatHandler}>
                <textarea name="text" cols="50" rows="5" onChange={e => setMessage(e.target.value)}>{message}</textarea>
                <button>Send</button>
            </form>
            {
                chatLog.map( chat => {
                    return (
                        <p key={chat.message}>{chat.username} says: {chat.message}</p>
                    )
                })
            }
        </div>
    );
}
export default Chat;