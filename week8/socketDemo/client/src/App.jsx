import io from "socket.io-client";
import './App.css';
import React, {useState, useEffect} from "react";

function App() {
  const [socket] = useState(() => io(":8000"));
  const [message, setMessage] = useState("");

  useEffect( () => {
    console.log("Is this running yet?")
    socket.on("Welcome", data => {
      console.log(data);
      setMessage(data);
    });
    // return () => socket.off("Welcome")
  }, [socket])

  const clickHandler = e => {
    socket.emit("goodbye", "See you later, alligator");
  }
  return (
    <div className="App">
      <h1>Socket Test</h1>
      <p>{message}</p>
      <button onClick={clickHandler}>Say Goodbye</button>
    </div>
  );
}

export default App;
