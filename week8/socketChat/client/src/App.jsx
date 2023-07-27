import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useState} from "react";
import Chat from "./components/Chat";
import Login from "./components/login";

function App() {

  const [username, setUsername] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [message, setMessage] = useState("");

  return (
    <BrowserRouter>
      <h1>Socket Chat</h1>
      <Routes>
        <Route path="/" element={<Login username={username} setUsername={setUsername}/>}/>
        <Route path="/chat" element={<Chat username={username} chatLog={chatLog} setChatLog={setChatLog} message={message} setMessage={setMessage}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
