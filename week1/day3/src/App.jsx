import './App.css';
import Form from './components/form';
import Header from './components/header';
import { useState } from 'react';

function App() {
  const [message, setMessage] = useState("Hello, World!");
  // const clickHandler = () => alert("You clicked a button!");
  // const changeHandler = (event) => {
  //   console.log(event.target.value);
  // }
  // let message = "Hello, World!"
  return (
    <div className="App">
      <Header message = {message}/>
      <Form 
      setMessage = {setMessage}
      />
    </div>
  );
}

export default App;
